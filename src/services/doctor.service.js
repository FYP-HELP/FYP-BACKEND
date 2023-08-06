const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { Doctor } = require("../models");
const ApiError = require("../utils/ApiError");
const { userService } = require(".");

const createDoctor = async (createBody) => {
  const doctorCreated = await Doctor.create(
    createBody
  );
  const role = 'doctor'
  const { username, email, password } = createBody;
  const userBody = { name : username, email, password, role }
  const userCreated = await userService.createUser(userBody);
  return { doctorCreated, userCreated };
};

const getAllDoctors = async (filter, options) => {
  const Doctors = await Doctor.paginate(filter, options);
  return Doctors;
};

const getDoctorById = async (lungPatientId) => {
  return Doctor.findOne({
    _id: lungPatientId,
    isDeleted: false,
  });
};

const updateDoctorById = async (lungPatientId, updateBody) => {
  const lungPatient = await Doctor.findByIdAndUpdate(
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

const deleteDoctorById = async (lungPatientId, deleteBody) => {
  const lungPatient = await Doctor.findByIdAndUpdate(lungPatientId, {
    deleteBody,
  });
  if (!lungPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "lungPatient not found");
  }
  Object.assign(lungPatient, deleteBody);
  await lungPatient.save();
  // await lungPatient.remove();
  return lungPatient;
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
};
