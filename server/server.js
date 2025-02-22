require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

const app = express();
app.use(express.json());
app.use(cors());

// Google OAuth Client
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_AUTH_ID);

// Google Login API
app.post("/api/auth/google", async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.REACT_APP_GOOGLE_AUTH_ID,
        });

        const { email, name, sub } = ticket.getPayload(); // Get user details

        // Generate JWT Token for Session Management
        const jwtToken = jwt.sign({ email, name, userId: sub }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Google login successful", token: jwtToken });
    } catch (error) {
        console.error("Google auth error:", error);
        res.status(401).json({ message: "Invalid Google token" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000",  // Allow frontend to access backend
    methods: "GET,POST",
    credentials: true  // Allow cookies if needed
}));
