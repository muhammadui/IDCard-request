const dotenv = require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const got = import("got").default;
const DB = require("./DB/DB");
const app = express();
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS.split(","),
  })
);
// Parse incoming request JSON data
app.use(express.json());

// Payment endpoint

app.post("/api/payment", async (req, res) => {
  try {
    await axios
      .post("https://api.flutterwave.com/v3/payments", {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
        json: {
          tx_ref: "hooli-tx-1920bbytty",
          amount: 1500,
          currency: "NGN",
          redirect_url: "https://google.com",
          meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
          },
          customer: {
            email: "user@gmail.com",
            phonenumber: "080****4528",
            name: "Yemi Desola",
          },
          customizations: {
            title: "Pied Piper Payments",
            logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
          },
        },
      })
      .json();
  } catch (err) {
    console.log(err);
    // console.log(err);
  }
});

// Save data endpoint
app.post("/api/save-data", async (req, res) => {
  try {
    // Save user data to database
    // ...

    res.send({
      status: "success",
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}
    serverKey ${process.env.FLUTTERWAVE_SECRET_KEY}
  `);
});
