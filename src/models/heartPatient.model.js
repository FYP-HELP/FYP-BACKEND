const mongoose = require('mongoose');

const heartPatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    chest_pain_type: {
        type: Number,
        required: true
    },
    resting_blood_pressure: {
        type: Number,
        required: true
    },
    serum_cholesterol: {
        type: Number,
        required: true
    },
    fasting_blood_sugar: {
        type: Boolean,
        required: true
    },
    resting_ecg_results: {
        type: Number,
        required: true
    },
    max_heart_rate: {
        type: Number,
        required: true
    },
    exercise_induced_angina: {
        type: Boolean,
        required: true
    },
    oldpeak: {
        type: Number,
        required: true
    },
    slope: {
        type: Number,
        required: true
    },
    num_major_vessels: {
        type: Number,
        required: true
    },
    thal: {
        type: Number,
        required: true
    }
});

const HeartPatient = mongoose.model('HeartPatient', heartPatientSchema);

module.exports = HeartPatient;
