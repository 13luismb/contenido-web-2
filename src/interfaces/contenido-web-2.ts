export interface Usuario {
  id: number;
  nombreCompleto: string;
  username: string;
  documento: number;
  tipoDocumento: string;
  telefono: string;
  direccion: string;
}

export interface UsuarioLogin extends Usuario {
  password: string;
}
