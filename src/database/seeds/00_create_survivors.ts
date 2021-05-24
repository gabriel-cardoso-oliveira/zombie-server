import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('survivors').insert([
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
  ])
}
