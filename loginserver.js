const express=require('express');

const app=express();

const mylogger=(req,res,next)=>{
   console.log("Logged");
   next();
}
const mydate=(req,res,next)=>{
    req.reqTime=new Date();
    next();
}

app.use(mylogger);
app.use(mydate);
app.get('/',(req,res)=>{
    res.send(`Current time:${req.reqTime}`);
})

app.listen(3001,()=>{
    console.log("http://localhost:3001");
});