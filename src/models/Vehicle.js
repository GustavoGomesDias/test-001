import Sequelize, { Model } from 'sequelize';

export default class Vehicle extends Model {
  static init(sequelize) {
    super.init({
      chassis: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requerido.',
          },
        },
      },

      model: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requerido.',
          },
        },
      },

      brand: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requerido.',
          },
        },
      },

      manufacture_year: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requerido.',
          },
        },
      },

      plate: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isLicensePlate: {
            msg: 'Placa inválida.',
          },
        },
      },

      color: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requerido.',
          },
        },
      },

      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      sequelize,
    });

    return this;
  }
}
