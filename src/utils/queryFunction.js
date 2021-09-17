import { pool } from '../models/pools';
import {
    insertMessages,
    createMessageTable,
    dropMessageTable,
    createUserTable,
    insertUser,
    dropUserTable,
} from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
        await pool.query(q);
        if (index + 1 === stop) resolve();
    });
});

export const dropTables = () => executeQueryArray([ dropMessageTable, dropUserTable ]);
export const createTables = () => executeQueryArray([ createMessageTable, createUserTable ]);
export const insertIntoTables = () => executeQueryArray([ insertMessages, insertUser ]);
