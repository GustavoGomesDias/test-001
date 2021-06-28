import Sequelize from 'sequelize';
import database from '../config/database.cjs';
import Sale from '../models/Sale.js';
import Acquisition from '../models/Acquisition.js';

const models = [Acquisition, Sale];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
