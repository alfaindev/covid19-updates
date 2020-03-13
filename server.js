const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT ? process.env.PORT : 3000
const { getGlobal, getByCountry } = require("./utils/api");
const { extractValue } = require("./utils/extractor");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/data", async (req, res) => {
  try {
    console.log("Retrieving data...");
    var [global, indonesia] = await Promise.all([
      getGlobal(),
      getByCountry("indonesia")
    ]);

    global = extractValue(global);
    indonesia = extractValue(indonesia);

    res
      .status(200)
      .json({
        success: true,
        data: { global, indonesia },
        message: "Data retrieved succesfully"
      });
  } catch (err) {
    console.log("Error ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/api/broadcast", async (req, res) => {
  try {
    console.log("Broadcasting...");
    let lastData = JSON.parse(fs.readFileSync(__dirname + "/data.json"));

    var [global, indonesia] = await Promise.all([
      getGlobal(),
      getByCountry("indonesia")
    ]);

    global = extractValue(global);
    indonesia = extractValue(indonesia);

    res.status(200).json({ newData: { global, indonesia }, lastData });
    fs.writeFileSync(
      __dirname + "/data.json",
      JSON.stringify({ global, indonesia }),
      err => console.log(err)
    );
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

const listener = app.listen(port, () => {
  console.log("App is listening on port " + listener.address().port);
});
