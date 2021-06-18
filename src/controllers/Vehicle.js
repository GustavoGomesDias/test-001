import VehicleModel from '../models/Vehicle';

class Vehicle {
  async findAll(req, res) {
    try {
      const vehicles = await VehicleModel.findAll();
      return res.status(200).json(vehicles);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async findByAvailable(req, res) {
    try {
      const vehicles = await VehicleModel.findAll({ where: { available: true } });
      return res.status(200).json(vehicles);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async findByChassis(req, res) {
    try {
      const { chassis } = req.params;
      const vehicles = await VehicleModel.finByPK(chassis);
      return res.status(200).json(vehicles);
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde.' });
    }
  }

  async create(req, res) {
    try {
      const result = await VehicleModel.findByPk(req.body.chassis);
      console.log(result);
      if (result) {
        return res.status(400).json({ message: 'Chassi já existe.' });
      }
      const vehicle = await VehicleModel.create(req.body);
      return res.status(200).json(vehicle);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async edit(req, res) {
    try {
      const { chassis } = req.params;
      const vehicle = await VehicleModel.findByPk(chassis);

      if (!vehicle) {
        return res.status(401).json({ message: 'Veículo não existe.' });
      }

      const newVehicle = await vehicle.update(req.body);
      return res.status(200).json(newVehicle);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { chassis } = req.params;
      const vehicle = await VehicleModel.findByPk(chassis);

      if (!vehicle) {
        return res.status(401).json({
          message: 'Veículo não existe.',
        });
      }

      await vehicle.destroy();
      return res.json({ message: 'Veículo deletado.' });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new Vehicle();
