const express = require('express');
const router = express.Router();

const MedicalClinicsService = require('../services/medical-clinics.service');

const validatorHandler = require('../middleware/validator.handler');
const {
  getMedicalClinicSchema,
  createMedicalClinicSchema,
  updateMedicalClinicSchema,
} = require('../schemas/medical-clinics.schema');

const medicalClinicsService = new MedicalClinicsService();

router.get('/', async (req, res) => {
  const medicalClinics = await medicalClinicsService.find();

  res.json(medicalClinics);
});

router.get(
  '/:id',
  validatorHandler(getMedicalClinicSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const medicalClinics = await medicalClinicsService.findOne(id);
      res.json(medicalClinics);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createMedicalClinicSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newMedicalClinic = await medicalClinicsService.create(body);
    res.status(201).json(newMedicalClinic);
  }
);

router.patch(
  '/:id',
  validatorHandler(getMedicalClinicSchema, 'params'),
  validatorHandler(updateMedicalClinicSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateMedicalClinic = await medicalClinicsService.update(id, body);
      res.json(updateMedicalClinic);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const deleteMedicalClinic = await medicalClinicsService.delete(id);
  res.json(deleteMedicalClinic);
});

module.exports = router;
