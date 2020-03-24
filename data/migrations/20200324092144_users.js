exports.up = knex =>
  knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username')
        .notNullable()
        .unique();
      tbl.string('password');
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists('users');
