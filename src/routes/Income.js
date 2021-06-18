import { Router } from 'express';
import Income from '../controllers/Income';

const router = Router();

router.get('/income', Income.income);

export default router;
