import { Request, Response } from 'express';
import knex from './../database/connection';

class SurvivorsController {
  async store(request: Request, response: Response) {
    const {
      name,
      email,
      birth_date,
      is_infected,
    } = request.body;

    const data = {
      name,
      email,
      birth_date,
      is_infected,
    }

    const survivor = await knex('survivors').insert(data);

    return response.json({
      id: survivor[0],
      ...data
    });
  }

  async update(request: Request, response: Response) {
    const {
      survivorId,
      name,
      email,
      birth_date,
      is_infected,
    } = request.body;

    const data = {
      name,
      email,
      birth_date,
      is_infected,
    }

    const survivor = await knex('survivors')
      .where('id', survivorId)
      .update(data);

    return response.json({
      id: survivor,
      ...data
    });
  }

  async index(request: Request, response: Response) {
    const survivors = await knex('survivors').select('*');

    return response.json(survivors);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const survivor = await knex('survivors').where('id', id).first();

    if (!survivor) {
      return response.status(400).json({ message: 'Survivor not fauld.' });
    }

    return response.json(survivor);
  }
}

export default SurvivorsController;
