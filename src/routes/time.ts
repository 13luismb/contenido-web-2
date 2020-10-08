import { Router } from 'express';
import { getTime } from '@helpers/time';
import { authenticate } from 'passport';
const router = Router();

router.get('/', authenticate('jwt'), async (req, res) => {
  const time = await getTime();
  res.status(200).json({ status: 200, message: 'Tienes el tiempo mi pana', time });
});

export default router;
