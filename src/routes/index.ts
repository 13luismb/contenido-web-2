import { Router } from 'express';
import time from './time';
import users from './users';
import auth from './auth';
import files from './file';

const router = Router();

router.use('/time', time);
router.use('/users', users);
router.use('/auth', auth);
router.use('/files', files);

export default router;
