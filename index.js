const express = require("express")
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/",(req, res)=>{
    res.send("hii first node server");
})
app.get("/login", (req,res)=>{
    res.send("please login in you account");
})

app.get("/youtube",(req, res)=>{
    res.send("hii youtube");
})

app.listen(PORT, ()=>{
    console.log(`my server is running port ${PORT}`);
})
