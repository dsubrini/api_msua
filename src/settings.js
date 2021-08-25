import dotenv from 'dotenv';

dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const pghost = process.env.PGHOST;
export const pguser = process.env.PGUSER;
export const pgdb = process.env.PGDATABASE;
export const pgpswd = process.env.PGPASSWORD;
export const pgport = process.env.PGPORT;
