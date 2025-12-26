// Load environment variables
require("dotenv").config({ path: "./config/config.env" });
// للتحقق من قراءة المتغيرات
console.log("📌 MONGO_URI:", process.env.MONGO_URI);
console.log("📌 PORT:", process.env.PORT);
console.log("📌 All ENV keys:", Object.keys(process.env).filter(k => k.includes('MONGO') || k.includes('PORT')));
const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

const PORT = process.env.PORT || 4000;

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`Uncaught Exception: ${err.message}`);
    process.exit(1);
});

// Connect to MongoDB
connectDatabase();

// Configure Cloudinary (dummy values for local testing)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start Server
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Unhandled Rejection: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});