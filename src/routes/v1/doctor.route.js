const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const doctorValidation = require('../../validations/doctor.validation');
const doctorController = require('../../controllers/doctor.controller');

const router = express.Router();

router
    .route('/')
    .post(doctorController.createDoctor)
    .get(doctorController.getDoctors);

router
    .route('/:doctorId')
    .get(doctorController.getDoctor)
    .patch(doctorController.updateDoctor)
module.exports = router;