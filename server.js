const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const HttpsProxyAgent = require("https-proxy-agent");
const cron = require("node-cron");

// middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// DB config
// Routes

// (async () => {
//   const proxyAgent = new HttpsProxyAgent(
//     "http://nwngttgs:i4wzbimskanx@64.43.90.97:6612"
//   );
//   const response = await fetch(
//     "https://stylome.herokuapp.com/api/salon/salons",
//     {
//       agent: proxyAgent,
//       headers: {
//         method: "GET",
//       },
//     }
//   );
//   const body = await response.json();
//   console.log(body);
// })();

// Schedule tasks to be run on the server.

const run = true;

cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
});

app.use("/", (req, res, next) => {
  res.json({ msg: "Hello everyone" });
});

// PORT
const PORT = process.env.PORT || 8000;

// Listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
