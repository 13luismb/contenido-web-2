import { Router } from 'express';

const router = Router();
const time = require('./time');

router.use('/time', time);

export default router;
