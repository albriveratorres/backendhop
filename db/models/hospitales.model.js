const { Sequelize, DataTypes, Model } = require('sequelize');

const HOSPITALES_TABLE = 'hospitales';

const HospitalesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombreUnidadMedica: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'nombre_unidad_medica',
  },
  tipoDeUnidad: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'tipo_de_unidad',
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  estado: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Hospitales extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HOSPITALES_TABLE,
      modelName: 'Hospitales',
      timestamps: false,
    };
  }
}

module.exports = { HOSPITALES_TABLE, HospitalesSchema, Hospitales };
