"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('survivors').insert([
            {
                name: "Gabriel Cardoso",
                email: "gabriel@test.com",
                birth_date: "1998-02-04",
                is_infected: false,
            },
            {
                name: "Lorena Pereira",
                email: "lorena@test.com",
                birth_date: "1997-09-24",
                is_infected: false,
            },
            {
                name: "Maria de Lurdes",
                email: "lurdes@test.com",
                birth_date: "1990-02-28",
                is_infected: false,
            },
            {
                name: "Danielle Pereira",
                email: "dpereira@test.com",
                birth_date: "2000-08-08",
                is_infected: false,
            },
            {
                name: "Leonardo Gomes",
                email: "leonardo@test.com",
                birth_date: "1995-04-16",
                is_infected: true,
            },
        ]);
    });
}
exports.seed = seed;
