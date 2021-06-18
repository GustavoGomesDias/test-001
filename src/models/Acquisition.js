import Sequelize, { Model } from 'sequelize';

export default class Acquisition extends Model {
  static init(sequelize) {
    super.init({
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
          is: {
            args: [/^[a-zA-Z]{3}[0-9]{4}$/],
            msg: 'Placa inválida',
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

      price: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'A cor deve ter entr 3 e 255 caracteres.',
          },
          notEmpty: {
            msg: 'Valor requerido.',
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
