import Acquisition from '../models/Acquisition.js';
import Sale from '../models/Sale.js';

class Income {
  async income(req, res) {
    try {
      let acquisitionValue;
      let saleValue;
      let commissionValue;

      const currentMonth = new Date().getMonth() + 1;

      const acquisitions = await Acquisition.findAll();
      const sales = await Sale.findAll();

      if (acquisitions.length === 1
        && (new Date(acquisitions[0].created_at).getMonth() + 1) === currentMonth) {
        acquisitionValue = acquisitions[0].price;
      } else {
        acquisitionValue = acquisitions.reduce((sun, item) => (
          (new Date(acquisitions[0].created_at).getMonth() + 1) === currentMonth
            ? sun + item.price : sun
        ), 0);
      }

      if (sales.length === 1 && (new Date(sales[0].created_at).getMonth() + 1) === currentMonth) {
        saleValue = sales[0].value;
        commissionValue = sales[0].commission;
      } else {
        saleValue = sales.reduce((sun, item) => (
          new Date(sales[0].created_at).getMonth() + 1 === currentMonth
            ? sun + item.value : sun), 0);
        commissionValue = sales.reduce((sun, item) => (
          new Date(sales[0].created_at).getMonth() + 1 === currentMonth
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
