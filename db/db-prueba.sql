CREATE TABLE "user" (
  "id_usuario" SERIAL PRIMARY KEY,
  "nombre_completo" varchar,
  "nombre_usuario" varchar,
  "password" varchar,
  "documento" varchar,
  "tipo_documento" char(1),
  "telefono" varchar,
  "direccion" varchar
);
