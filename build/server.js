"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const server = index_1.default.listen(process.env.PORT || 5000, () => console.log(`Listening on port ${process.env.PORT || 5000}`));
//# sourceMappingURL=server.js.map