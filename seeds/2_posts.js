exports.seed = function(knex, Promise) {
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                knex('posts').insert([{
                    user_id: 1,
                    title: 'Longs Peak, in the boulder field',
                    body: 'Its not a very hard hike to the boulder field so carrying a heavy pack there shouldnt really be that too big of a concern but definitly bring something comfortable to sleep on cuz its rocky to say the least!'
                }, {
                    user_id: 2,
                    title: 'Camp site lack luster',
                    body: 'Just got back from camping up north and I gotta say it was pretty bad. I would not suggest going up that way this time of year.'
                }, {
                    user_id: 3,
                    title: 'Lost... HELP!!!',
                    body: 'I have no idea where I should be going to to find this campsite. If anyone could help me out that would be awesome!!!'
                }]),
            ]);
        });
};
