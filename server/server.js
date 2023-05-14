const express = require("express");
const cors = require("cors");
const db = require("./DB/DB");
const router = express.Router();
const app = express();

app.use(cors());
const allowedOrigins = ["http://localhost:5174", "https://example.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.set("x-powered-by", false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

router.get("/", (req, res) => {
  res.send("App is Connected");
});
router.post("/api/students", async (req, res) => {
  const { fullname, email, mobile, reg_number, department, faculty, courses } =
    req.body;

  try {
    const conn = await db.getConnection();

    // Insert the new TEAM data into the database

    await conn.query(
      "INSERT INTO students (fullname, email, mobile, reg_number, department, faculty, courses, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)",
      [fullname, email, mobile, reg_number, department, faculty, courses]
    );

    // Close the database connection
    conn.release();

    // Return a success response
    res.status(200).json({ message: "Student registration successful." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing the request." });
  }
});
const port = process.env.port || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
