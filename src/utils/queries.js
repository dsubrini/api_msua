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
