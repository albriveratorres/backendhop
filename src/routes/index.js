const express = require('express');

const medicalClinics = require('./medical-clinics.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/medical-clinics', medicalClinics);
}

module.exports = routerApi;
