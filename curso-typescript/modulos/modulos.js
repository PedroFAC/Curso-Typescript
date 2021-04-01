"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { areaRetangulo } from "./retangulo";
//import { areaCircunferencia } from "./circunferencia";
const circunferencia_1 = require("./circunferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
const { digaOi } = require("./novo");
console.log(digaOi("Pedro"));
//# sourceMappingURL=modulos.js.map