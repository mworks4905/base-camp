'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/base_camp_dev'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/base_camp_dev'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};