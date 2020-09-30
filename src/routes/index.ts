import { Router } from 'express';

const router = Router();
import time from './time';

router.use('/time', time);

export default router;
