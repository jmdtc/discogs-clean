module.exports = {
    up: async function (queryInterface, _) {
        await  Promise.all([
            queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;'),
            queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS pg_trgm;'),
        ])

        return Promise.all([
            queryInterface.sequelize.query(
                `DROP INDEX IF EXISTS track_title_trgm;
                CREATE INDEX track_title_trgm ON tracks using gin(title gin_trgm_ops);`
            ),
            queryInterface.sequelize.query(
                `DROP INDEX IF EXISTS release_title_trgm;
                CREATE INDEX release_title_trgm ON releases using gin(title gin_trgm_ops);`
            ),
            queryInterface.sequelize.query(
                `DROP INDEX IF EXISTS artist_name_trgm;
                CREATE INDEX artist_name_trgm ON artists using gin(name gin_trgm_ops);`
            ),
        ])
    },
    down: async function (queryInterface, _) {
        return Promise.all([
            queryInterface.sequelize.query('DROP EXTENSION IF EXISTS fuzzystrmatch;'),
            queryInterface.sequelize.query('DROP EXTENSION IF EXISTS pg_trgm CASCADE;')
        ])
    }
};