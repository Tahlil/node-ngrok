const express = require("express");
const ngrok = require('ngrok');

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(80, () => console.log("Server listening on port 3000!"));

(async function() {
    const url = await ngrok.connect();
    console.log(url);
  })();