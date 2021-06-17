import { Router } from 'express';
import Vehicle from '../controllers/Vehicle';

const router = Router();

router.get('/vehicle', Vehicle.findAll);
router.get('/vehicle/available', Vehicle.findByAvailable);
router.get('/vehicle/:chassis', Vehicle.findByChassis);
router.post('/vehicle', Vehicle.create);
router.put('/vehicle/edit/:chassis', Vehicle.edit);
router.delete('/vehicle/delete/:chassis', Vehicle.delete);

export default router;
