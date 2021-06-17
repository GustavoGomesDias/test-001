import Sequelize, { Model } from 'sequelize';

export default class Vehicle extends Model {
  static init(sequelize) {
    super.init({
      chassis: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [17],
            msg: 'O chassi deve ter 17 caracteres.',
          },
        },
      },

      model: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O model deve ter entr 3 e 255 caracteres.',
          },
        },
      },

      brand: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O modelo deve ter entr 3 e 255 caracteres.',
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
          len: {
            args: [3, 255],
            msg: 'A cor deve ter entr 3 e 255 caracteres.',
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
