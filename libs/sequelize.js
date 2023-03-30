require('dotenv').config();
const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
let USER, PASSWORD, URI;
switch (process.env.NODE_ENV) {
  case 'development':
    USER = encodeURIComponent(config.development.username);
    PASSWORD = encodeURIComponent(config.development.password);
    URI = `mysql://${USER}:${PASSWORD}@${config.development.host}:${config.development.port}/${config.development.database}`;
    break;
  case 'test':
    USER = encodeURIComponent(config.test.username);
    PASSWORD = encodeURIComponent(config.test.password);
    URI = `mysql://${USER}:${PASSWORD}@${config.test.host}:${config.test.port}/${config.test.database}`;
    break;
  case 'production':
    USER = encodeURIComponent(config.production.username);
    PASSWORD = encodeURIComponent(config.production.password);
    URI = `mysql://${USER}:${PASSWORD}@${config.production.host}:${config.production.port}/${config.production.database}`;
    break;
  default:
    break;
}

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

module.exports = sequelize;
