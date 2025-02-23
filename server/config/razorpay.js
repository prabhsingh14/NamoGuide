import Razorpay from "razorpay"

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY || "rzp_test_1OJ5Z5e3z0JQJd", //only for now
	key_secret: process.env.RAZORPAY_SECRET || "zj6Q6Q9Z5Z5e3z0JQJd",
});