import Sequelize from 'sequelize';
import database from '../config/database';
import Sale from '../models/Sale';
import Acquisition from '../models/Acquisition';

const models = [Acquisition, Sale];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
