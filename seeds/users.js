exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert([{
          post_id: 1,
          user_id: 1,
          body: 'Also there is no water up there so make to bring enough for cooking and drinking!'}])
      ]);
    });
};
