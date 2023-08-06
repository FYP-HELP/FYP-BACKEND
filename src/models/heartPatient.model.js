const mongoose = require('mongoose');

const heartPatientSchema = new mongoose.Schema({
    age: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      required: true
    },
    chest_pain_type: {
      type: Number,
      enum: [1, 2, 3, 4],
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
      enum: [0, 1, 2],
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
      min: 0,
      max: 3,
      required: true
    },
    thal: {
      type: Number,
      enum: [0, 1, 2],
      required: true
    }
  });

const HeartPatient = mongoose.model('HeartPatient', heartPatientSchema);

module.exports = HeartPatient;
