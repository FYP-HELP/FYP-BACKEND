const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { LungPatient } = require("../models");
const ApiError = require("../utils/ApiError");

const createLungPatient = async (req) => {

  // const lungPatientCreated = await LungPatient.create(
  //   createBody
  // );

  return req.file;
};


const getAllLungPatients = async (filter, options) => {
    const lungPatients = await LungPatient.paginate(filter, options);
    return lungPatients;
};

const getLungPatientById = async (lungPatientId) => {
  return LungPatient.findOne({
    _id: lungPatientId,
    isDeleted: false,
  });
};

const updateLungPatientById = async (lungPatientId, updateBody) => {
  const lungPatient = await LungPatient.findByIdAndUpdate(
    lungPatientId,
    { updateBody }
  );
  if (!lungPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "lungPatient not found");
  }
  Object.assign(lungPatient, updateBody);
  await lungPatient.save();
  return lungPatient;
};

const deleteLungPatientById = async (lungPatientId, deleteBody) => {
  const lungPatient = await LungPatient.findByIdAndUpdate(lungPatientId, {
    deleteBody,
  });
  if (!lungPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "lungPatient not found");
  }
  Object.assign(lungPatient, deleteBody);
  await lungPatient.save();
  await lungPatient.remove();
//   return lungPatient;
};

module.exports = {
  createLungPatient,
  getAllLungPatients,
  getLungPatientById,
  updateLungPatientById,
  deleteLungPatientById,
};
