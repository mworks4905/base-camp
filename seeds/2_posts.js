exports.seed = function(knex, Promise) {

  return knex('posts').del()
    .then(function () {
      return Promise.all([

        knex('posts').insert([{
          user_id: 1,
          title: 'Longs Peak, in the boulder field',
          body: 'Its not a very hard hike to the boulder field so carrying a heavy pack there shouldnt really be that too big of a concern but definitly bring something comfortable to sleep on cuz its rocky to say the least!'}]),

      ]);
    });
};
