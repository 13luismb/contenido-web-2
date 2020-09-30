import { Router } from 'express';
import { getTime } from '../helpers/time';
const router = Router();

router.get('/', async (req, res) => {
  const time = await getTime();
  res.status(200).json({ status: 200, message: 'Tienes el tiempo mi pana', time });
});

export default router;
