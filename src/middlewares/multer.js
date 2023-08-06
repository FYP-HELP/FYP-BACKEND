const multer = require('multer');
const path = require('path');

// Set up multer to handle file uploads and specify the storage destination
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Save uploaded files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use unique names for each uploaded file
  },
});

const upload = multer({ storage });

module.exports = upload;