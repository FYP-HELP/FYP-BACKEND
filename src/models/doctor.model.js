const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Doctor schema
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    contactInfo: {
        phone: {
            type: String
        },
        email: {
            type: String
        },
        address: {
            type: String
        }
    },
    specialty: {
        type: String,
        enum: ['Heart', 'Lung'],
        required: true
    }
});

// Create the Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;