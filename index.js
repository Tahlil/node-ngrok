const express = require("express");
const ngrok = require('ngrok');
require('dotenv').config();

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(80, () => console.log("Server listening on port 80!"));
(async function() {
    try {
        const url = await ngrok.connect({authtoken: process.env.NGROK_AUTH_TOKEN});
        console.log(url);
    } catch (error) {
        console.log(error);
    }
    
  })();