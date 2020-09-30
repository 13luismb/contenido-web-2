import { Router } from 'express';
import { getUsers } from '@helpers/users';
const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).json({ status: 200, usuarios: data, message: 'Usuarios obtenidos!' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al obtener los usuarios' });
  }
});

export default router;
