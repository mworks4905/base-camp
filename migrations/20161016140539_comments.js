exports.up = function(knex) {
 return knex.schema.createTable('comments', function(table){
   table.increments()
   table.integer('post_id')
      .references('posts.id')
      .onDelete('CASCADE')
      .notNullable()
      .index();
   table.integer('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable()
      .index();
   table.text('body')
   table.dateTime('created_at')
 })
}

exports.down = function(knex) {
 return knex.schema.dropTable('comments')
}
