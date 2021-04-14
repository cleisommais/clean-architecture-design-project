import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
    user: "developer",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "example",
    idleTimeoutMillis: 100,
});

export default db;
