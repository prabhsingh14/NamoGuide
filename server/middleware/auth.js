const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");
dotenv.config();

exports.auth = async (req, res, next) => {
	try {
		// Extracting token from cookies, body, or headers
		const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization")?.replace("Bearer ", "");

		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Token is missing",
			});
		}

		try {
			// Verify the token
			const decode = jwt.verify(token, process.env.JWT_SECRET);

			// Validate user existence in DB (to guard against tampered tokens)
			const user = await User.findById(decode.id);
			if (!user) {
				return res.status(404).json({
					success: false,
					message: "User not found",
				});
			}

			// Attach user to request
			req.user = decode;
		} catch (error) {
			if (error.name === "TokenExpiredError") {
				return res.status(401).json({
					success: false,
					message: "Token has expired",
				});
			}
			return res.status(401).json({
				success: false,
				message: "Token is invalid",
			});
		}

		next();
	} catch (error) {
		console.error("JWT Middleware Error:", error.message);
		return res.status(500).json({
			success: false,
			message: "Something went wrong while validating the token",
		});
	}
};