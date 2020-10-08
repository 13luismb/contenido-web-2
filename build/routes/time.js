"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const time_1 = require("../helpers/time");
const router = express_1.Router();
router.get('/', async (req, res) => {
    const time = await time_1.getTime();
    res.status(200).json({ status: 200, message: 'Tienes el tiempo mi pana', time });
});
exports.default = router;
//# sourceMappingURL=time.js.map