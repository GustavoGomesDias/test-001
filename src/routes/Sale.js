import { Router } from 'express';
import Sale from '../controllers/Sale';

const router = Router();

router.get('/sales', Sale.findAll);
router.get('/sales/:chassis', Sale.findByChassis);
router.post('/sales', Sale.create);
router.put('/sales/edit/:id', Sale.edit);
router.delete('/sales/delete/:id', Sale.edit);

export default router;
