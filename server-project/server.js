import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//look in env file for db url
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const port = 8000;
app.listen(port, () => {
  console.log(`Your server is on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "This is the root route" });
});

app.get("/ramen", async (req, res) => {
  const value = 2;
  const result = await db.query(
    `
   SELECT * FROM ramen WHERE spiciness = $1`,
    [value]
  );
  res.json(result.rows);
});

// `
// SELECT * FROM ramen WHERE spiciness = $1`,
//  [2]

// SELECT * FROM ramen WHERE Time_To_Cook < $1`,
//     [160]

// SELECT * FROM ramen WHERE time_to_cook < $1 AND Price <$2`,
//     [180, 2]
