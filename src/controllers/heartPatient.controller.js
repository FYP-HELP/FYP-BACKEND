const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { heartPatientService } = require('../services');

const createHeartPatient = catchAsync(async (req, res) => {
  const heartPatient = await heartPatientService.createHeartPatient(req.body);
  res.status(httpStatus.CREATED).send(heartPatient);
});

const getHeartPatients = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await heartPatientService.queryHeartPatients(filter, options);
  res.send(result);
});

const getHeartPatient = catchAsync(async (req, res) => {
  const heartPatient = await heartPatientService.getHeartPatientById(req.params.heartPatientId);
  if (!heartPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, 'HeartPatient not found');
  }
  res.send(heartPatient);
});

const updateHeartPatient = catchAsync(async (req, res) => {
  const heartPatient = await heartPatientService.updateHeartPatientById(req.params.heartPatientId, req.body);
  res.send(heartPatient);
});

const deleteHeartPatient = catchAsync(async (req, res) => {
  await heartPatientService.deleteHeartPatientById(req.params.heartPatientId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createHeartPatient,
  getHeartPatients,
  getHeartPatient,
  updateHeartPatient,
  deleteHeartPatient,
};
