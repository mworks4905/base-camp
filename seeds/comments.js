
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert([{
          first_name: 'Matt',
          last_name: 'Works',
          email: 'mworks4905@gmail.com',
          hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
        }])
      ]);
    });
};
