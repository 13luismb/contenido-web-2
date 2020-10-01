import { Router } from 'express';
import { isLogged, isAuth, signUpFieldsValidation, loginFieldsValidation } from '@validations/auth';
import { passportAuth } from '@middlewares/middleware';
import { signUpUser } from '@helpers/auth';
const router = Router();

router.get('/logout', isAuth, (req: any, res) => {
  req.logout();
  res.json({ status: 200, message: 'Sesión finalizada.' });
});

router.post('/signup', signUpFieldsValidation, async (req, res) => {
  try {
    const data = await signUpUser(req.body);
    res.status(200).json({ status: 200, usuario: data, message: 'Usuario registrado satisfactoriamente' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al registrar un usuario' });
  }
});

router.post('/user', isLogged, loginFieldsValidation, passportAuth);

export default router;
