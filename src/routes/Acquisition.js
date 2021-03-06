import { Router } from 'express';
import Acquisition from '../controllers/Acquisition.js';

const router = Router();

router.get('/acquisition', Acquisition.findAll);
router.post('/acquisition', Acquisition.create);
router.put('/acquisition/edit/:id', Acquisition.edit);
router.delete('/acquisition/delete/:id', Acquisition.delete);

export default router;
