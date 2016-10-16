exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name')
      .notNullable();
    table.string('last_name')
      .notNullable();
    table.string('email', 255)
      .notNullable()
      .unique();
    table.specificType('hash', 'character(60)')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
