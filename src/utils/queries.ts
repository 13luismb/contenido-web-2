const queries = {
  GET_USERS: `SELECT * FROM public.user`,
  GET_USER_BY_ID: `SELECT * FROM public.user WHERE id_usuario = $1`,
  GET_USER_BY_USERNAME: `SELECT * FROM public.user WHERE nombre_usuario = $1`,
  SIGN_UP_USER: `INSERT INTO public.user (nombre_usuario, password, nombre_completo, documento, tipo_documento, telefono, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
  UPDATE_USER: `UPDATE public.user SET nombre_usuario = $1, nombre_completo = $2, documento = $3, tipo_documento = $4, telefono = $5, direccion = $6 WHERE id_usuario = $7 RETURNING *`,
  DELETE_USER: `DELETE FROM public.user WHERE id_usuario = $1`,
};

export default queries;
