"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("@helpers/users");
const router = express_1.Router();
router.get('/', async (req, res) => {
    try {
        const data = await users_1.getUsers();
        res.status(200).json({ status: 200, usuarios: data, message: 'Usuarios obtenidos!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al obtener los usuarios' });
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map