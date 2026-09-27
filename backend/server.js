// 1. Set up network bypass DNS rules on Line 1
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// 2. Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// 3. LOAD ENVIRONMENT VARIABLES FIRST (CRITICAL MOVED UP)
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    });
}

// 4. Load App Dependencies AFTER environment variables are populated
const app = require("./app");
const connectDatabase = require("./db/Database"); 

// 5. Connect Database (Now safely has access to process.env.DB_URL)
connectDatabase();
  
// 6. Create Server Instance
const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);  
});

// 7. Unhandled Promise Rejection Handling
process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});
