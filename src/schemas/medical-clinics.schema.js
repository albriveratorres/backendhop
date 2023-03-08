const Joi = require('joi');

const id = Joi.number().id();
const name = Joi.string().min(3).max(200);
const direction = Joi.string();
const city = Joi.string().min(3);

const getMedicalClinicSchema = Joi.object({
  id: id.required(),
});

const createMedicalClinicSchema = Joi.object({
  name: name.required(),
  direction: direction,
  city: city.required(),
});

const updateMedicalClinicSchema = Joi.object({
  name: name,
  direction: direction,
  city: city,
});

module.exports = {
  getMedicalClinicSchema,
  createMedicalClinicSchema,
  updateMedicalClinicSchema,
};
