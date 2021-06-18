import Sequelize, { Model } from 'sequelize';

export default class Sale extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Valor de compra inválido.',
          },
          notEmpty: {
            msg: 'Valor requerido.',
          },
        },
      },
      commission: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Comissão inválida.',
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
    this.belongsTo(models.Acquisition, { foreignKey: 'acquisition_id' });
  }
}
