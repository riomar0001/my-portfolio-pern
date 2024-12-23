import dotenv from "dotenv";

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

    return res.status(201).json({ message: "Account Successfully created" });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }

    res.status(500).json({ message: error.message });
  }
};

export default registration;
