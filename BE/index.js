require("dotenv").config();
const express = require("express");
const route = require("./src/routes/index");
const connectDB = require("./src/utils/connectDB"); // ← import hàm connect
const app = express();

const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || "localhost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init routes
route(app);

// Kết nối DB và start server
connectDB().then(() => {
  app.listen(port, hostname, () => {
    console.log(` Server đang chạy tại http://${hostname}:${port}`);
  });
});
