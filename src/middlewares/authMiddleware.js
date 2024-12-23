import jwt from "jsonwebtoken";
import prisma from "../configs/prismaClient.js";

export const protect = async (req, res, next) => {
  let token = req.cookies.access_token;
    

  if (!token) {
    return res.status(401).send({ error: "Access Denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);
    

    req.user = await prisma.users.findUnique({
      where: {
        id: decoded.id,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    if (!req.user) {
      return res.status(404).send({ error: "User not found" });
    }

    next();
  } catch (error) {

    // console.log(error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send({ error: "Unauthorized, invalid token" });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).send({ error: "Unauthorized, token has expired" });
    }

    return res.status(500).send({ error: "Server Error" });
  }
};
