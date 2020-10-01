import Pool from '@utils/Pool';
import queries from '@utils/queries';
import { Usuario } from '@interfaces/contenido-web-2';
import { PoolClient } from 'pg';

const pool = Pool.getInstance();

export const getUsers = async (): Promise<Usuario[]> => {
  const client: PoolClient = await pool.connect();
  try {
    const response = (await client.query(queries.GET_USERS)).rows;
    const users: Usuario[] = response.map((row) => {
      return {
        id: row.id_usuario,
        nombreCompleto: row.nombre_completo,
        username: row.nombre_usuario,
        documento: row.documento,
        tipoDocumento: row.tipo_documento,
        telefono: row.telefono,
        direccion: row.direccion,
      };
    });
    return users;
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};

export const getUserById = async (id: number): Promise<Usuario> => {
  const client: PoolClient = await pool.connect();
  try {
    const response = (await client.query(queries.GET_USER_BY_ID, [id])).rows;
    const users: Usuario[] = response.map((row) => {
      return {
        id: row.id_usuario,
        nombreCompleto: row.nombre_completo,
        username: row.nombre_usuario,
        documento: row.documento,
        tipoDocumento: row.tipo_documento,
        telefono: row.telefono,
        direccion: row.direccion,
      };
    });
    return users[0];
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};

export const updateUser = async ({ user, id }: { user: Usuario; id: number }): Promise<Usuario> => {
  const client: PoolClient = await pool.connect();
  const { username, nombreCompleto, direccion, documento, tipoDocumento, telefono } = user;
  try {
    const response = (await client.query(queries.UPDATE_USER, [username, nombreCompleto, documento, tipoDocumento, telefono, direccion, id])).rows[0];
    const user: Usuario = {
      id: response.id_usuario,
      nombreCompleto: response.nombre_completo,
      username: response.nombre_usuario,
      documento: response.documento,
      tipoDocumento: response.tipo_documento,
      telefono: response.telefono,
      direccion: response.direccion,
    };
    return user;
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const client: PoolClient = await pool.connect();
  try {
    const response = (await client.query(queries.DELETE_USER, [id])).rowCount > 0;
    return response;
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};
