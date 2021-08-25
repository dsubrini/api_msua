import { createTables, insertIntoTables } from './queryFunction';

(async () => {
    await createTables();
    await insertIntoTables();
})();
