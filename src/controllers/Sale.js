import SaleModel from '../models/Sale.js';
import AcquisitionModel from '../models/Acquisition.js';

class Sale {
  async findAll(req, res) {
    try {
      const sales = await SaleModel.findAll({
        include: AcquisitionModel,
        order: [['updated_at', 'DESC']],
      });
      return res.status(200).json(sales);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async findByChassis(req, res) {
    try {
      const { chassis } = req.params;
      const sale = await SaleModel.findAll({
        include: [{
          model: AcquisitionModel,
          where: { chassis },
        }],
      });

      return res.status(200).json(sale[0]);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async create(req, res) {
    try {
      const { value, acquisition_id } = req.body;
      const result = await SaleModel.findAll({ where: { acquisition_id } });

      if (result[0]) {
        return res.status(400).json({ message: 'Chassi já cadastrado.' });
      }

      const commission = parseFloat(value) * 0.1;
      const sale = await SaleModel.create({ value, commission, acquisition_id });
      const acquisisiton = await AcquisitionModel.findByPk(acquisition_id);
      await acquisisiton.update({ available: false });
      return res.status(200).json(sale);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async edit(req, res) {
    try {
      const sale = await SaleModel.findByPk(req.params.id);

      if (!sale) {
        return res.status(401).json({ message: 'Venda não encontrada.' });
      }
      const { value, acquisition_id } = req.body;
      const commission = parseFloat(value) * 0.1;

      const newSale = await sale.update({ value, commission, acquisition_id });
      return res.status(200).json(newSale);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const sale = await SaleModel.findByPk(id);

      if (!sale) {
        return res.status(401).json({
          message: 'Veículo não existe.',
        });
      }

      await sale.destroy();
      return res.json({ message: 'Veículo deletado.' });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new Sale();
