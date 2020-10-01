//Proximos helpers aqui
import Pool from '@utils/Pool';
import queries from '@utils/queries';
import { compare, genSaltSync, hashSync } from 'bcryptjs';
import { Usuario, UsuarioLogin } from '@interfaces/contenido-web-2';
import { PoolClient } from 'pg';

const pool = Pool.getInstance();

export const signUpUser = async (body: UsuarioLogin): Promise<Usuario> => {
  const client: PoolClient = await pool.connect();
  const { username, nombreCompleto, direccion, documento, tipoDocumento, telefono, password } = body;
  try {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);
    const response = (await client.query(queries.SIGN_UP_USER, [username, hashedPassword, nombreCompleto, documento, tipoDocumento, telefono, direccion])).rows[0];
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

export const getUserByUsername = async (username: string): Promise<UsuarioLogin> => {
  const client: PoolClient = await pool.connect();
  try {
    const response = (await client.query(queries.GET_USER_BY_USERNAME, [username.toLowerCase()])).rows;
    const users: UsuarioLogin[] = response.map((row) => {
      return {
        id: row.id_usuario,
        nombreCompleto: row.nombre_completo,
        username: row.nombre_usuario,
        documento: row.documento,
        tipoDocumento: row.tipo_documento,
        telefono: row.telefono,
        direccion: row.direccion,
        password: row.password,
      };
    });
    return users[0];
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};

export const comparePassword = (candidate: string, hash: string): Promise<boolean> => {
  return new Promise((res, rej) => {
    compare(candidate, hash, (err, isMatch) => {
      if (err) rej(err);
      res(isMatch);
    });
  });
};
