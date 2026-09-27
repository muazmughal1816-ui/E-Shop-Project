const mongoose = require("mongoose");

const connectDatabase = () => {
  if (!process.env.DB_URL) {
    console.error("❌ Error: DB_URL environment variable is missing.");
    return;
  }

  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`🚀 MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`❌ Database connection error: ${err.message}`);
    });
};

module.exports = connectDatabase;
