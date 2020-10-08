"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const Pool_1 = __importDefault(require("../utils/Pool"));
const queries_1 = __importDefault(require("../utils/queries"));
const pool = Pool_1.default.getInstance();
exports.getUsers = async () => {
    const client = await pool.connect();
    try {
        const response = (await client.query(queries_1.default.GET_USERS)).rows;
        const users = response.map((row) => {
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
    }
    catch (e) {
        throw e;
    }
};
//# sourceMappingURL=users.js.map