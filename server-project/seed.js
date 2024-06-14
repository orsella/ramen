import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS Ramen(
    id SERIAL PRIMARY KEY,
    Flavour VARCHAR(255),
    Price NUMERIC,
    Spiciness NUMERIC,
    Time_To_Cook NUMERIC
    )`);

db.query(`INSERT INTO Ramen (Flavour, Price, Spiciness, Time_To_Cook)
    VALUES
    ('Fake Pork', 0.99, 2, 120),
    ('Fake Beef', 0.99, 1, 120),
    ('Fake Chicken', 0.99, 2, 180),
    ('Fake Shrimp', 1.99, 4, 180)
    `);
