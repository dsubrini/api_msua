import { Pool } from 'pg';
import dotenv from 'dotenv';
import {
    pgdb, pghost, pgport, pgpswd, pguser
} from '../settings';

dotenv.config();

const connectionString = `postgresql://${pguser}:${pgpswd}@${pghost}:${pgport}/${pgdb}`;

export const pool = new Pool({
    connectionString
});
