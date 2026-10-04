// create token and save it in the cookie
const sendToken = (user, statusCode, res) => {
    // 1. Generate the token from the user object passed into this function
    const token = user.getJwtToken();

    // 2. Options for cookies
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 Days
        httpOnly: true,
        sameSite: "none", // Add this if frontend/backend are on different ports/domains
        secure: true,     // Add this if running over HTTPS or in production environments
    };

    // 3. Return response with the dynamic status code
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};

module.exports = sendToken;
