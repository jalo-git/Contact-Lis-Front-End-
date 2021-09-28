const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "user",
  host: "localhost",
  password: "user",
  database: "user",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email= req.body.email;
  const phone = req.body.phone;
  const location= req.body.location;
  const date = req.body.date;
 

  db.query(
    "INSERT INTO userdetails (name, email, phone, location, date) VALUES (?,?,?,?,?)",
    [name, email, phone, location, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM userdetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE userDetails SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM userDetails WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(4000, () => {
  console.log("Yey, your server is running on port 4000");
});