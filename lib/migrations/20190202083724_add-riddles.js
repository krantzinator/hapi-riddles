
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('Riddles', (table) => {

    table.increments('id').primary();
    table.string('slug').notNullable();
    table.string('question').notNullable();
    table.string('answer').notNullable();
  })

};

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTable('Riddles');
};