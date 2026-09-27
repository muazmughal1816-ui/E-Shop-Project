const multer = require("multer");
const path = require("path");

// Use path.join to target your existing 'uploads' folder reliably
const uploadDir = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
    // 1. FIXED: Changed 'res' to 'file'
    // 2. FIXED: Pointed directly to your absolute 'uploads' directory variable
    destination: function (req, file, cb) {
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");
    },
});

exports.upload = multer({ storage: storage });
