const { Hospitales, HospitalesSchema } = require('./hospitales.model');

function setupModels(sequelize) {
  Hospitales.init(HospitalesSchema, Hospitales.config(sequelize));
}

module.exports = setupModels;
