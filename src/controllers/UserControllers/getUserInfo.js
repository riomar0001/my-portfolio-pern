import dotenv from "dotenv";
import prisma from "../../configs/prismaClient.js";
import jwt from "jsonwebtoken";

dotenv.config();

/**
 * @description Get User Information Controller
 * @route GET /api/user/info
 * @access Private
 */

const getUserInfo = async (req, res) => {
  try {
    const access_token = req.cookies.access_token;

    const token_info = jwt.verify(access_token, process.env.JWT_SECRET);

    const user_id = token_info.id;

    const user = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        first_name: true,
        last_name: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }

    res.status(500).json({ message: error.message });
  }
};

export default getUserInfo;
