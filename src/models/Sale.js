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
        },
      },
      commission: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Comissão inválida.',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.Vehicle, { foreignKey: 'chassis' });
  }
}
