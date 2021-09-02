import dotenv from 'dotenv';

dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const pghost = process.env.PG_HOST;
export const pguser = process.env.PG_USER;
export const pgdb = process.env.PG_DATABASE;
export const pgpswd = process.env.PG_PASSWORD;
export const pgport = process.env.PG_PORT;
