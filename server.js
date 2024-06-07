const express = require("express");
const session = require("express-session");
const router = require("./router");
const app = express();
const nocache = require("nocache");


//used instead of bodyparser
app.use(express.urlencoded({ extended: true }));
express.json()
//express.json add akanam reviewver paranj
app.set("view engine", "ejs");

//   ....home route



app.use(
  session({
    secret: "  secretwe",                              
    resave: false,
    saveUninitialized: false,
  })
);

app.use(nocache());  //its a third party middle ware 
app.use("/", router); //its used to apply  middle ware
app.get("/", (req, res) => {
  if (req.session.user) {
    res.redirect("/dashboard");
  } else {
    res.render("base", { title: "Login System" });
  }                                                
});
app.listen(5000, () => {
  console.log("Listening to server on http://localhost:5000");
});