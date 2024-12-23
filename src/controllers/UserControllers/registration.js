import dotenv from "dotenv";
import prisma from "../../configs/prismaClient.js";
import hashPassword from "../../utils/hashPassword.js";

dotenv.config();

/**
 * @description registration controller
 * @route POST /api/user/registration
 * @access Public
 */
const registration = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if ((!email, !username, !password)) {
      return res
        .status(400)
        .json({ status_code: 400, error: "fill all fields" });
    }

    const userExist = await prisma.users.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    });

    if (userExist) {
      return res.status(400).send({ error: "User already exist" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.users.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    //edge cases handling if user is not created
    if (!newUser) {
      return res.status(400).json({ error: "User not created" });
    }

    return res
      .status(201)
      .json({
        message: "Account Successfully created",
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }

    res.status(500).json({ message: error.message });
  }
};

export default registration;
