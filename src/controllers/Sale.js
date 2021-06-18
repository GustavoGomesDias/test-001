import SaleModel from '../models/Sale';

class Sale {
  async findAll(req, res) {
    try {
      const sales = await SaleModel.findAll();
      return res.status(200).json(sales);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async findByChassis(req, res) {
    try {
      const { chassis } = req.params;
      const sale = await SaleModel.findAll({ where: { chassis } });
      return res.status(200).json(sale[0]);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async create(req, res) {
    try {
      const { value, chassis } = req.body;
      const commission = parseFloat(value) * 0.1;
      const sale = await SaleModel.create({ value, commission, chassis });
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
      const { value, chassis } = req.body;
      const commission = parseFloat(value) * 0.1;

      const newSale = await sale.update({ value, commission, chassis });
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
