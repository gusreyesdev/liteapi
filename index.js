const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const configDB = require("./database/config");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.static("public"));

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/profiles", require("./routes/profiles"));
app.use("/companies", require("./routes/companies"));
app.use("/inventory", require("./routes/inventory"));
app.use("/user", require("./routes/user"))

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT, async () => {
  await configDB.sync();

  //await configDB.sync({ alter:true });

  console.log(`servidor corriendo en puerto ${process.env.PORT} `);
});

module.exports = app;
