const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { lungPatientController } = require('../../controllers');
const upload = require('../../middlewares/multer')
const router = express.Router();

router.route('/create-lung-patient-data')
    .post(upload.single('image'), lungPatientController.createLungPatient);
router.route('/read-lung-patient-data')
    .post(auth(), lungPatientController.getLungPatient);

router.route('/read-all-lung-patients-data')
    .post(auth(), lungPatientController.getLungPatients);

router.route('/update-lung-patient-data')
    .put(auth(), lungPatientController.updateLungPatient);

router.route('/delete-lung-patient-data')
    .patch(auth(), lungPatientController.deleteLungPatient);


module.exports = router;
