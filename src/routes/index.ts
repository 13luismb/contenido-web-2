import { Router } from 'express';
import time from './time';
import users from './users';

const router = Router();

router.use('/time', time);
router.use('/users', users);

export default router;
