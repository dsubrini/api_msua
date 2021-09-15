export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR DEFAULT '',
    message VARCHAR NOT NULL
)
`;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('michael', '1er message'),
       ('admin', 'second message')
`;

export const dropMessageTable = 'DROP TABLE messages';

export const createUserTable = `
DROP TABLE IF EXISTS users;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS users (
id UUID NOT NULL DEFAULT uuid_generate_v4(),
CONSTRAINT id PRIMARY KEY (id)
);
`;

export const insertUser = 'INSERT INTO users VALUES( uuid_generate_v4()), (uuid_generate_v4())';

export const dropUserTable = 'DROP TABLE users';
