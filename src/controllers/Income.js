import Acquisition from '../models/Acquisition';
import Sale from '../models/Sale';

class Income {
  async income(req, res) {
    try {
      let acquisitionValue;
      let saleValue;
      let commissionValue;

      const date = new Date();
      const month = date.getMonth();

      const acquisitions = await Acquisition.findAll();
      const sales = await Sale.findAll();

      if (acquisitions.length === 1 && acquisitions[0].created_at.getMonth() === month) {
        acquisitionValue = acquisitions[0].price;
      } else {
        acquisitionValue = acquisitions.reduce((sun, item) => (
          acquisitions[0].created_at.getMonth() === month ? sun + item.price : sun
        ), 0);
      }

      if (sales.length === 1 && sales[0].created_at.getMonth() === month) {
        saleValue = sales[0].value;
        commissionValue = sales[0].commission;
      } else {
        saleValue = sales.reduce((sun, item) => (sales[0].created_at.getMonth() === month
          ? sun + item.value : sun), 0);
        commissionValue = sales.reduce((sun, item) => (sales[0].created_at.getMonth() === month
          ? sun + item.commission : sun), 0);
      }

      const income = saleValue - (acquisitionValue + commissionValue);

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
