import { dropTables, insertIntoTables, createTables } from '../src/utils/queryFunction';

before(async () => {
    setTimeout((done) => { done(); }, 50000);
    await createTables();
    await insertIntoTables();
});

after(async () => {
    setTimeout((done) => { done(); }, 50000);
    await dropTables();
});
