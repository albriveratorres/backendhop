'use strict';

const {
  HospitalesSchema,
  HOSPITALES_TABLE,
} = require('../models/hospitales.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(HOSPITALES_TABLE, HospitalesSchema);
  },

  async down(queryInterface) {
    await queryInterface.drop(HOSPITALES_TABLE);
  },
};
