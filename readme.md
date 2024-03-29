# Discogs

## Instructions to set up the project

### Dependencies needed

1. [NodeJS (LTS)](https://nodejs.org/en/) must be installed
2. I recommend to install yarn, but this is optional (lots of different ways to install it)
3. [Docker desktop](https://www.docker.com/products/docker-desktop)

### Before everything else, each time

1. Docker desktop must be up and running
2. At root level (where `package.json` is) `yarn docker` will start the containers, which consists of
   - the Postgres container for the database
3. yarn migrate if migrations need to be run

### Do it once

1. A `/database` folder must be created at root level
2. It must contain the `.env` file with the credentials to DB
3. It must contain the pg dump file `discogs-db.sql`
4. The command `cat ./database/discogs-db.sql | docker exec -i postgres-db psql -U unicorn_user -d rainbow_database` will mount the db. You can check the logs of the postgres container in the docker desktop. When the task is completed, the dump file can be removed.

### Start the Node server

1. Run `yarn install` if new modules have been added to the `package.json`
2. `yarn dev` will start the development server

## Features

- for now a database with models

## Useful commands

- [Sequelize CLI and migration commands documentation](https://github.com/sequelize/cli)
