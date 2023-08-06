const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const doctorValidation = require('../../validations/doctor.validation');
const doctorController = require('../../controllers/doctor.controller');

const router = express.Router();

router.route('/create-doctor')
    .post(auth(), doctorController.createDoctor);

router.route('/read-doctor')
    .post(auth(), doctorController.getDoctor);

router.route('/read-all-doctors')
    .post(auth(), doctorController.getDoctors);

router.route('/update-doctor')
    .put(auth(), doctorController.updateDoctor);

router.route('/delete-doctor')
    .patch(auth(), doctorController.deleteDoctor);

module.exports = router;