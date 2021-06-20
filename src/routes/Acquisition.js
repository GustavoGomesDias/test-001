import { Router } from 'express';
import Acquisition from '../controllers/Acquisition';

const router = Router();

router.get('/acquisition', Acquisition.findAll);
router.get('/acquisition/:chassis', Acquisition.findByChassis);
router.get('/acquisition/search/available', Acquisition.findByAvailable);
router.post('/acquisition', Acquisition.create);
router.put('/acquisition/edit/:id', Acquisition.edit);
router.delete('/acquisition/delete/:id', Acquisition.delete);

export default router;
