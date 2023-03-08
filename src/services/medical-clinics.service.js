const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class MedicalClinicsService {
  constructor() {
    this.clinics = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.clinics.push({
        id: faker.datatype.number(),
        name: faker.company.name(),
        direction: faker.address.direction(),
        city: faker.address.city(),
      });
    }
  }

  async create(data) {
    const newMedicalClinic = {
      id: faker.datatype.number,
      ...data,
    };
    this.clinics.push(newMedicalClinic);
    return newMedicalClinic;
  }

  async find() {
    return this.clinics;
  }

  async findOne(id) {
    const medicalClinic = this.clinics.find((element) => element.id == id);
    if(!medicalClinic){
      throw boom.notFound('Clinica no encontrada');
    }
    return medicalClinic;
  }

  async update(id, changes) {
    const index = this.clinics.findIndex((element) => element.id == id);
    if(index === -1){
      throw boom.notFound('Clinica no encontrada');
    }
    const medicalClinics = this.clinics[index];
    this.clinics[index] = {
      ...medicalClinics,
      ...changes
    }
    return this.clinics[index];
  }

  async delete(id) {
    const index = this.clinics.findIndex((element) => element.id == id);
    if(index === -1){
      throw boom.notFound('Clinica no encontrada');
    }
    this.clinics.splice(index, 1);
    return{ id };
  }
}

module.exports = MedicalClinicsService;
