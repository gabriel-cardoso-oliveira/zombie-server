import express from 'express';
import { celebrate, Joi } from 'celebrate';

import SurvivorsController from './controllers/SurvivorsController';

const routes = express.Router();

const survivorsController = new SurvivorsController();

routes.get('/survivors', survivorsController.index);
routes.get('/survivors/:id', survivorsController.show);
routes.post('/survivors', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email(),
    birth_date: Joi.string(),
    is_infected: Joi.boolean().required(),
  })
}), survivorsController.store);
routes.put('/survivors', celebrate({
  body: Joi.object().keys({
    survivorId: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    birth_date: Joi.string().required(),
    is_infected: Joi.boolean().required(),
  })
}), survivorsController.update);

export default routes;
