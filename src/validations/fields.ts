import { validationResult } from 'express-validator';

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

export const updateUserFieldsValidation = [
  check('documento').exists().withMessage('Debe incluir la cedula del usuario').isInt().withMessage('Documento invalido'),
  check('nombreCompleto').exists().withMessage('Debe incluir el nombre del usuario').isString().isLength({ min: 1 }).withMessage('El nombre no puede ser vacio'),
  check('username').exists().withMessage('Debe incluir el nombre de usuario').isString().withMessage('Nombre de usuario invalido'),
  check('direccion').exists().withMessage('Debe incluir la direccion del usuario').isString().withMessage('Direccion invalida'),
  check('tipoDocumento').exists().withMessage('Debe incluir el tipo de documento del usuario').isString().isLength({ max: 1 }).withMessage('Nacionalidad invalida'),
  check('telefono').exists().withMessage('Debe incluir el telefono del usuario').isString().withMessage('Telefono invalido'),
];

export const loginFieldsValidation = [
  check('username').exists().withMessage('Debe incluir el nombre de usuario').isString().withMessage('Nombre de usuario invalido'),
  check('password').exists().withMessage('Debe incluir la contraseña').isString().withMessage('Contraseña invalida'),
];

export const checkResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: 400,
      message: 'Error en datos enviados',
      error: errors.array()[0],
    });
  } else {
    next();
  }
};
