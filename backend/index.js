const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = "6105";
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "lab_pcypi",
  host: "server2.bsthun.com",
  password: "bnvADnmqvUiLPkvJ",
  database: "lab_blank01_p3pjuy",
  port: "6105",
});
db.connect();

app.get("/Register", (req, res) => {
  const sql =
    "SELECT user_id,username FROM User WHERE user_id = (SELECT MAX(user_id) FROM lab_blank01_p3pjuy.User)";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.post("/getBio", (req, res) => {
  const BIO_content = req.body.BIO_content;

  console.log(BIO_content);

  db.query(
    "INSERT INTO BIO (BIO_content) VALUES(?)",
    [BIO_content],
    (err, result) => {
      console.log(err);
      console.log(result);

      if (err) {
        res.status(500).send(err);
      }
      if (result) {
        res.send("Post Successfully");
      }
    }
  );
});

app.get("/getBio" , (req,res)=>{
    const sql = "SELECT BIO_content FROM BIO WHERE BIO_ID = (SELECT MAX(BIO_id) FROM BIO)"
    db.query(sql,(err,result) =>{
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    })
})

app.post("/Login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("Email : ", email);
  console.log("Password : ", password);

  db.query(
    "SELECT * FROM User WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      console.log("Error :", err);
      console.log(result);

      if (err) {
        res.status(500).send(err);
      }
      if (result.length > 0) {
        res.send(result);
      } //   else if(result.length === 0){
      //     res.send({message:"User not found"})
      //    }
      else {
        res.send({ message: "Wrong username or password please check again!" });
      }
    }
  );
});

app.post("/Register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  console.log(username, password);

  db.query(
    "INSERT INTO lab_blank01_p3pjuy.User (username, password,email) VALUES(?,?,?)",
    [username, password, email],
    (err, result) => {
      console.log(err);
      console.log(result);

      if (err) {
        res.status(500).send(err);
      }
      if (result) {
        res.send("Successfully");
      }
    }
  );
});

app.delete('/deletePost', (req, res) => {
    const sql = "DELETE FROM BIO WHERE BIO_id = (SELECT MAX(BIO_id) FROM BIO)";
    db.query(sql, (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json({ Message: "Post deleted successfully" });
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
