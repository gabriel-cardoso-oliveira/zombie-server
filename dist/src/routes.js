"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const SurvivorsController_1 = __importDefault(require("./controllers/SurvivorsController"));
const routes = express_1.default.Router();
const survivorsController = new SurvivorsController_1.default();
routes.get('/survivors', survivorsController.index);
routes.get('/survivors/:id', survivorsController.show);
routes.post('/survivors', celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email(),
        birth_date: celebrate_1.Joi.string(),
        is_infected: celebrate_1.Joi.boolean().required(),
    })
}), survivorsController.store);
routes.put('/survivors', celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        survivorId: celebrate_1.Joi.number().required(),
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        birth_date: celebrate_1.Joi.string().required(),
        is_infected: celebrate_1.Joi.boolean().required(),
    })
}), survivorsController.update);
exports.default = routes;
