import AcquisitionModel from '../models/Acquisition';

class Acquisition {
  async findAll(req, res) {
    try {
      const acquisitions = await AcquisitionModel.findAll({
        attributes: [
          'id', 'chassis', 'model', 'brand', 'manufacture_year', 'plate', 'available', 'color', 'price', 'created_at',
        ],
      });
      return res.status(200).json(acquisitions);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async findByChassis(req, res) {
    try {
      const { chassis } = req.params;
      const vehicle = await AcquisitionModel.findAll({ where: { chassis } });
      return res.status(200).json(vehicle[0]);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async findByAvailable(req, res) {
    try {
      const vehicles = await AcquisitionModel.findAll({ where: { available: true } });
      return res.status(200).json(vehicles);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async create(req, res) {
    try {
      const result = await AcquisitionModel.findAll({ where: { chassis: req.body.chassis } });

      if (result[0]) {
        return res.status(400).json({ message: 'Chassi já cadastrado.' });
      }

      const acquisition = await AcquisitionModel.create(req.body);
      return res.status(200).json(acquisition);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async edit(req, res) {
    try {
      const acquisisiton = await AcquisitionModel.findByPk(req.params.id);

      if (!acquisisiton) {
        return res.status(401).json({ message: 'Venda não encontrada.' });
      }

      const newSale = await acquisisiton.update(req.body);
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
      const acquisisiton = await AcquisitionModel.findByPk(id);

      if (!acquisisiton) {
        return res.status(401).json({
          message: 'Veículo não existe.',
        });
      }

      await acquisisiton.destroy();
      return res.json({ message: 'Veículo deletado.' });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new Acquisition();
