const express = require("express");
const app = express();
const cors = require("cors");
const videoRoute = require("./routes/videoRoute");
const PORT = 8080;

app.use(express.json());

app.use(cors());

app.use(express.static("files"));

app.use((_req, _res, next) => {
  next();
});

// app.use((req, res, next) => {
//   if (
//     req.method === "POST" &&
//     req.headers["content-type"] !== "application/json"
//   ) {
//     return res.status(400).send("Server requires application/json");
//   }
//   next();
// });

app.use("/", videoRoute);

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});
