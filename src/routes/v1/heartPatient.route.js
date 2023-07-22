const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { heartPatientValidation } = require('../../validations');
const { heartPatientController } = require('../../controllers');
const router = express.Router();

router.route('/create-heart-patient-data')
    .post(auth(), heartPatientController.createHeartPatient);

router.route('/read-heart-patient-data')
    .post(auth(), heartPatientController.getHeartPatient);

router.route('/read-all-heart-patients-data')
    .post(auth(), heartPatientController.getHeartPatients);

router.route('/update-heart-patient-data')
    .put(auth(), heartPatientController.updateHeartPatient);

router.route('/delete-heart-patient-data')
    .patch(auth(), heartPatientController.deleteHeartPatient);


module.exports = router;
