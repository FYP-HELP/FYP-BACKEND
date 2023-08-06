const mongoose = require('mongoose');

const lungPatientSchema = new mongoose.Schema({
    image: {
        data: Buffer,           // Binary data for the X-ray image (store as Buffer)
        contentType: String,    // MIME type of the image (e.g., image/jpeg, image/png, etc.)
    },
    uploadDate: {
        type: Date,             // Timestamp of when the image was uploaded
        default: Date.now,      // Set the default value to the current date and time
    },
});

const LungPatient = mongoose.model('LungPatient', lungPatientSchema);

module.exports = LungPatient;
