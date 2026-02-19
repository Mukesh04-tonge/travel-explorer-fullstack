const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get("/destinations", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM destinations ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/destinations", async (req, res) => {
  const { name, location, price, image } = req.body;
  try {
    await pool.query(
      "INSERT INTO destinations(name, location, price, image) VALUES($1,$2,$3,$4)",
      [name, location, price, image]
    );
    res.json({ message: "Destination Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

