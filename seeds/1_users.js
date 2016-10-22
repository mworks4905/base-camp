exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function() {
            return Promise.all([
                knex('users').insert([{
                    first_name: 'Matt',
                    last_name: 'Works',
                    email: 'mworks4905@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }, {
                    first_name: 'Craig',
                    last_name: 'Quincy',
                    email: 'craig@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }, {
                    first_name: 'Lisa',
                    last_name: 'Ma',
                    email: 'lisa@gmail.com',
                    hash: '$2a$12$nIWNWkn0l/33UVKGMeMpnehLvXnDwor7NtHXTm.AW3.sp2JHR30Ia'
                }])
            ]);
        });
};