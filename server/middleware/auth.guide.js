// only for guides
import Guide from "../models/Guide.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            req.body.token ||
            req.header("Authorization")?.replace("Bearer ", "");
    
        console.log("Extracted Token:", token);
    
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }
    
        try {
            const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log("Decoded Token:", decode); // Log decoded JWT payload
    
            const user = await Guide.findById(decode.id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
    
            req.user = decode;
        } catch (error) {
            console.error("JWT Verification Error:", error); // Log error details
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

export default auth;