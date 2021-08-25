import { Pool } from 'pg';
import dotenv from 'dotenv';
import {
    pgdb, pghost, pgport, pgpswd, pguser
} from '../settings';

dotenv.config();

export const pool = new Pool({
    pguser, pgpswd, pgport, pgdb, pghost
});
