
/**
 * @desc    Logout user
 * @route   POST /api/user/logout
 * @access  Private
 */
const logout = async (req, res) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return res.status(200).json({ error: "User Logged Out" });
};

export default logout;
