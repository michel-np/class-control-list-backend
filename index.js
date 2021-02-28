const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const sequelize = require("./models");
const studentRoutes = require("./routes/studentRoutes");
const studentClassRoutes = require("./routes/studentClassRoutes");
const studyClassRoutes = require("./routes/studyClassRoutes");


const app = express();
const db = sequelize();


app.use(express.json({ limit: "50mb" }));

app.use(require("cors")())

app.use("/aluno", studentRoutes);
app.use("/aula", studyClassRoutes);
app.use("/aluno-aula", studentClassRoutes);


app.listen(3001, () => {
    console.log("listening to port 3001");
});
