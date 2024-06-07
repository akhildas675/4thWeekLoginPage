const express = require("express");
const router = express.Router();

const values = {
  email: "admin@gmail.com",
  password: "admin123"}

// user login
router.post("/login", (req,res) => {    //request handler
  if (req.body.email===values.email && req.body.password===values.password) {    //  req.body  ??
    req.session.user = true;     // session activated

    // res.redirect("/dashboard/joel");
      res.redirect('/dashboard')
  } else{
    res.render("base", { message: "Invalid Username or Password" });  

  }
})

// router.get("/dashboard/:g", (req, res) => {
  // console.log(req.params.g)

  // if (req.session.user) {
  //   res.render("dashboard");
  // }    
  // });
  router.get('/dashboard',(req,res)=>{

  
  if (req.session.user) {
    res.render("dashboard");
  }
  })


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});



module.exports = router;