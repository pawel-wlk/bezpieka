const express = require("express");
const session = require("express-session")

const app = express()
app.use(session({
  secret: "secret-key"
}))
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs", {username: req.session.username? req.session.username : "unknown"})
})

app.post("/", (req, res) => {
  const username = req.body.username
  req.session.username = username
  res.redirect("/")
})

app.listen(3000, () => console.log("listening"))