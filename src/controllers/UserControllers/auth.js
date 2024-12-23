import dotenv from "dotenv";
import prisma from "../../configs/prismaClient.js";
import bcryptjs from "bcryptjs";

dotenv.config();

/**
 * @description Authentication Controller
 * @route POST /api/user/auth
 * @access Public
 */
const auth = async (req, res) => {
  try {
    const { username_email, password } = req.body;

    if (!username_email) {
      return res
        .status(400)
        .json({ status_code: 400, error: "Enter Email or Username" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ status_code: 400, error: "Enter Password" });
    }

    const user = await prisma.users.findFirst({
      where: {
        OR: [{ email: username_email }, { username: username_email }], //avoid query data leakage
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    return res
      .status(202)
      .json({
        message: "Login Successful",
        user: user.username,
        email: user.email,
      });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }

    res.status(500).json({ message: error.message });
  }
};

export default auth;
