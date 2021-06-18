import Acquisition from '../models/Acquisition';
import Sale from '../models/Sale';

class Income {
  async income(req, res) {
    try {
      let acquisitionValue;
      let saleValue;
      let commissionValue;

      const acquisitions = await Acquisition.findAll();
      const sales = await Sale.findAll();

      if (acquisitions.length === 1) {
        acquisitionValue = acquisitions[0].price;
      } else {
        acquisitionValue = acquisitions.reduce((sun, item) => sun + item.price, 0);
      }

      if (sales.length === 1) {
        saleValue = sales[0].value;
        commissionValue = sales[0].commission;
      } else {
        saleValue = sales.reduce((sun, item) => sun + item.value, 0);
        commissionValue = sales.reduce((sun, item) => sun + item.commission, 0);
      }

      const income = saleValue - acquisitionValue;

      return res.status(200).json({
        acquisitions: acquisitionValue,
        sales: saleValue,
        commissions: commissionValue,
        income,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Erro de servidor, tente novamente mais tarde.' });
    }
  }
}

export default new Income();
