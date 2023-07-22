const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { HeartPatient } = require("../models");
const ApiError = require("../utils/ApiError");

const createHeartPatient = async (req, createBody) => {
  createBody.createdBy = req.user.id;
  const heartPatientCreated = await HeartPatient.create(
    createBody
  );
  return heartPatientCreated;
};

const getAllHeartPatients = async (filter, options) => {
    const HeartPatients = await HeartPatient.paginate(filter, options);
    return HeartPatients;
};

const getHeartPatientById = async (heartPatientId) => {
  return HeartPatient.findOne({
    _id: heartPatientId,
    isDeleted: false,
  });
};

const updateHeartPatientById = async (heartPatientId, updateBody) => {
  const heartPatient = await HeartPatient.findByIdAndUpdate(
    heartPatientId,
    { updateBody }
  );
  if (!heartPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "heartPatient not found");
  }
  Object.assign(heartPatient, updateBody);
  await heartPatient.save();
  return heartPatient;
};

const deleteHeartPatientById = async (heartPatientId, deleteBody) => {
  const heartPatient = await HeartPatient.findByIdAndUpdate(heartPatientId, {
    deleteBody,
  });
  if (!heartPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "heartPatient not found");
  }
  Object.assign(heartPatient, deleteBody);
  await heartPatient.save();
  await heartPatient.remove();
//   return heartPatient;
};

module.exports = {
  createHeartPatient,
  getAllHeartPatients,
  getHeartPatientById,
  updateHeartPatientById,
  deleteHeartPatientById,
};
