import { Router } from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '@helpers/users';
import { updateUserFieldsValidation, checkResult } from '@validations/fields';
const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).json({ status: 200, usuarios: data, message: 'Usuarios obtenidos!' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al obtener los usuarios' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getUserById(+id);
    res.status(200).json({ status: 200, usuario: data, message: 'Usuario obtenido!' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al obtener usuario' });
  }
});

router.put('/:id', updateUserFieldsValidation, checkResult, async (req, res) => {
  const { id } = req.params;
  try {
    const data = await updateUser({ user: req.body, id: +id });
    res.status(200).json({ status: 200, usuario: data, message: 'Usuario actualizado!' });
  } catch (e) {
    res.status(500).json({ status: 500, error: { ...e }, message: 'Error al actualizar un usuario' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteUser(+id);
    res.status(200).json({ status: 200, message: data ? 'Usuario eliminado' : 'No se eliminó ningún usuario' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al obtener' });
  }
});

export default router;
