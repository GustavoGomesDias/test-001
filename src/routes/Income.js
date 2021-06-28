import { Router } from 'express';
import Income from '../controllers/Income.js';

const router = Router();

router.get('/income', Income.income);

export default router;
