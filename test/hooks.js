import {
    dropTables,
    insertIntoTables,
    createTables
} from '../src/utils/queryFunction';

before(async () => {
    await createTables();
    await insertIntoTables();
});

after(async () => {
    await dropTables();
});
