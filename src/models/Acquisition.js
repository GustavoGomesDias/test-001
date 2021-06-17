import Sequelize, { Model } from 'sequelize';

export default class Acquisition extends Model {
  static init(sequelize) {
    super.init({
      model: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requirido.',
          },
        },
      },

      brand: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Valor requirido.',
          },
        },
      },

      manufacture_year: {
        type: Sequelize.DATE,
        defaultValue: '',
        validate: {
          isDate: {
            msg: 'Data inválida.',
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
            msg: 'Valor requirido.',
          },
        },
      },

      price: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'A cor deve ter entr 3 e 255 caracteres.',
          },
          notEmpty: {
            msg: 'Valor requirido.',
          },
        },
      },

    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'chassis' });
  }
}
