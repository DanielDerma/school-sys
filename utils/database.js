import { Pool } from "pg";

let conn;

if (!conn) {
  const conn = new Pool({
    user: "postgres",
    password: "qsef",
    host: "localhost",
    port: 5432,
    database: "<any>",
  });
}

export { conn };
