const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { lungPatientService } = require('../services');

const createLungPatient = catchAsync(async (req, res) => {
  const lungPatient = await lungPatientService.createLungPatient(req);
  res.status(httpStatus.CREATED).send(lungPatient);
});

const getLungPatients = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await lungPatientService.queryLungPatients(filter, options);
  res.send(result);
});

const getLungPatient = catchAsync(async (req, res) => {
  const lungPatient = await lungPatientService.getLungPatientById(req.params.lungPatientId);
  if (!lungPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, 'LungPatient not found');
  }
  res.send(lungPatient);
});

const updateLungPatient = catchAsync(async (req, res) => {
  const lungPatient = await lungPatientService.updateLungPatientById(req.params.lungPatientId, req.body);
  res.send(lungPatient);
});

const deleteLungPatient = catchAsync(async (req, res) => {
  await lungPatientService.deleteLungPatientById(req.params.lungPatientId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLungPatient,
  getLungPatients,
  getLungPatient,
  updateLungPatient,
  deleteLungPatient,
};
