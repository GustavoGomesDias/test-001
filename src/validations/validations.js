/* eslint-disable import/prefer-default-export */
import Vehicle from '../models/Vehicle';

export const validationChassis = (chassis) => Vehicle.findByPk(chassis);
