import { Router } from 'express';
import time from './time';
import users from './users';
import auth from './auth';

const router = Router();

router.use('/time', time);
router.use('/users', users);
router.use('/auth', auth);

export default router;
