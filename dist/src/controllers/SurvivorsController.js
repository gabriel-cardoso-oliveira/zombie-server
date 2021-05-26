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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./../database/connection"));
class SurvivorsController {
    store(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, birth_date, is_infected, } = request.body;
            const data = {
                name,
                email,
                birth_date,
                is_infected,
            };
            const survivor = yield connection_1.default('survivors').insert(data);
            return response.json(Object.assign({ id: survivor[0] }, data));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { survivorId, name, email, birth_date, is_infected, } = request.body;
            const data = {
                name,
                email,
                birth_date,
                is_infected,
            };
            const survivor = yield connection_1.default('survivors')
                .where('id', survivorId)
                .update(data);
            return response.json(Object.assign({ id: survivor }, data));
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const survivors = yield connection_1.default('survivors').select('*');
            return response.json(survivors);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const survivor = yield connection_1.default('survivors').where('id', id).first();
            if (!survivor) {
                return response.status(400).json({ message: 'Survivor not fauld.' });
            }
            return response.json(survivor);
        });
    }
}
exports.default = SurvivorsController;
