import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGODB_URL } = process.env;

const connect = async () => {
	try {
		await mongoose.connect(MONGODB_URL, {
			useNewUrlParser: true, // Fixed typo
			useUnifiedTopology: true,
		});
		console.log("DB Connection Success");
	} catch (err) {
		console.error("DB Connection Failed", err);
		process.exit(1);
	}
};

export default { connect }; 