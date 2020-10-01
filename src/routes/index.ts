import { Router } from 'express';
import time from './time';

const router = Router();

router.use('/time', time);

export default router;
