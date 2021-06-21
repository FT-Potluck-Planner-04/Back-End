exports.up = function (knex) {
  return knex.schema
  .createTable('users', users => {
    users.increments('user_id');
    users.string('username', 255).notNullable().unique();
    users.string('password', 255).notNullable();
  })
  .createTable('potlucks', potlucks => {
    potlucks.increments('potluck_id');
    potlucks.string('potluck_name', 255).notNullable().unique();
    potlucks.string('potluck_description', 255)
    potlucks.date('date', 255).notNullable();
    potlucks.time('time', 255).notNullable();
    potlucks.string('location', 255).notNullable();
  })
  .createTable('potluck_invitees', potluck_invitees => {
    potluck_invitees.increments('potluck_invitees_id');
    potluck_invitees.integer('user_id', 255)
    .unsigned()
    .notNullable()
    .references('user_id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    potluck_invitees.integer('potluck_id', 255)
    .unsigned()
    .notNullable()
    .references('potluck_id')
    .inTable('potlucks')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    potluck_invitees.integer('attending', 255).defaultTo(0);
  })
  .createTable('items', items => {
    items.increments('item_id');
    items.string('item_name', 255).notNullable().unique();
  })
  .createTable('potluck_items', potluck_items => {
    potluck_items.increments('potluck_items_id');
    potluck_items.integer('potluck_id', 255)
    .unsigned()
    .notNullable()
    .references('potluck_id')
    .inTable('potlucks')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    potluck_items.integer('item_id', 255)
    .unsigned()
    .notNullable()
    .references('item_id')
    .inTable('items')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    potluck_items.integer('user_id', 255)
    .unsigned()
    .notNullable()
    .references('user_id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('potluck_items')
  .dropTableIfExists('items')
  .dropTableIfExists('potluck_invitees')
  .dropTableIfExists('potlucks')
  .dropTableIfExists('users')
};
