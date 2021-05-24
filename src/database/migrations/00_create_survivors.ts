import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('survivors', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').nullable()
    table.date('birth_date').nullable()
    table.boolean('is_infected').notNullable()
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('survivors');
}
