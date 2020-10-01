import Pool from '@utils/Pool';
import queries from '@utils/queries';
import { Usuario } from '@interfaces/contenido-web-2';

const pool = Pool.getInstance();

export const getUsers = async (): Promise<Usuario[]> => {
  const client = await pool.connect();
  try {
    const response = (await client.query(queries.GET_USERS)).rows;
    const users: Usuario[] = response.map((row) => {
      return {
        id: row.id_usuario,
        nombreCompleto: row.nombre_completo,
        username: row.nombre_usuario,
        documento: row.cedula,
        tipoDocumento: row.tipo_documento,
        telefono: row.telefono,
        direccion: row.direccion,
      };
    });
    return users;
  } catch (e) {
    throw e;
  }
};
