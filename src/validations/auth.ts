//Aqui van las validaciones

import { check } from 'express-validator';

export const signUpFieldsValidation = [
  check('documento').exists().withMessage('Debe incluir la cedula del usuario').isInt().withMessage('Documento invalido'),
  check('nombreCompleto').exists().withMessage('Debe incluir el nombre del usuario').isString().isLength({ min: 1 }).withMessage('El nombre no puede ser vacio'),
  check('username').exists().withMessage('Debe incluir el nombre de usuario').isString().withMessage('Nombre de usuario invalido'),
  check('direccion').exists().withMessage('Debe incluir la direccion del usuario').isString().withMessage('Direccion invalida'),
  check('tipoDocumento').exists().withMessage('Debe incluir el tipo de documento del usuario').isString().isLength({ max: 1 }).withMessage('Nacionalidad invalida'),
  check('telefono').exists().withMessage('Debe incluir el telefono del usuario').isString().withMessage('Telefono invalido'),
  check('password').exists().withMessage('Debe incluir la contraseña'),
];
export const loginFieldsValidation = [
  check('username').exists().withMessage('Debe incluir el nombre de usuario').isString().withMessage('Nombre de usuario invalido'),
  check('password').exists().withMessage('Debe incluir la contraseña').isString().withMessage('Contraseña invalida'),
];

export const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send({
      status: 304,
      response: 'Ya existe una sesión',
    });
  } else {
    next();
  }
};

export const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send({
      status: 400,
      response: 'Debe iniciar sesión primero',
    });
  }
};
