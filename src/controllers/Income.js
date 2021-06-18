import Acquisition from '../models/Acquisition';
import Sale from '../models/Sale';

class Income {
  async income(req, res) {
    try {
      const acquisitionValue = (await Acquisition.findAll())
        .reduce((acumulator, acquisition) => acumulator + acquisition.price);

      const saleValue = (await Sale.findAll())
        .reduce((acumulator, sale) => acumulator + sale.value);
      const commissionValue = (await Sale.findAll())
        .reduce((acumulator, sale) => acumulator + sale.commission);

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
