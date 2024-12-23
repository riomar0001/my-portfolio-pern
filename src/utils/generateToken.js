import jwt from "jsonwebtoken";

const generateToken = (res, id, username, email) => {
  const token = jwt.sign({ id, username, email }, process.env.JWT_SECRET, {
    expiresIn: "3h",
    issuer: "example.com",
  });

  res.cookie("access_token", token, {
    httpOnly: true, //first level of cookie security
    secure: process.env.NODE_ENV === "production",  //second level of cookie security or CSRF protection
    sameSite: "strict", //third level of cookie security or CSRF protection
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
