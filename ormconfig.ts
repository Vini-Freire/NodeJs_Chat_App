import { DataSource } from "typeorm"

const sqliteSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'sqlite',
    database: 'src/database/appdb.sqlite',
    entities: ['src/entities/**.ts'],
    migrations: ['src/database/migrations/**.ts'],
    "synchronize": true
});

sqliteSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

export default sqliteSource;