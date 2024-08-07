const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json({extended:false}));


// const UserSchema = require("./db/UserModel");
const mongoose = require("mongoose");
const User = require("./db/UserModel");

mongoose.connect("mongodb://localhost:27017/node_to_mongo_connection")
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("mongo error", err));

// app.use((req, res, next)=>{
//     console.log("hello from middleware");
//     req.myname = "rahul diwan"
//     // return res.send("back to work now")
//     next();
// })

app.get("/", (req, res)=>{
    console.log(req.headers)
    res.setHeader("name", "Rahul")
    res.send("hello home")
})
app.post("/users", async (req, res)=>{
    const body = req.body;
    const allUsers = await User.find({});
   const newUser =  await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
    })
    
    const html = `<ul>${allUsers.map(user=>(`<li>${user.firstName}</li>`)).join("")} </ul>`
    return res.send(html);
})

app.get("/users/:user_id", (req, res)=>{
    const userId = req.url.split("/")[2];
    fs.readFile("./modules/users.js", "utf-8", (err, result)=>{
        const users = JSON.parse(result);

        const userdata = users.filter((user)=>{
             return  user.user_id === userId
        })
        // console.log( userdata)
        res.send(userdata);
    })
    // console.log(req.url.split("/")[2]);
})

app.post("/api/users", (req, res)=>{
    try {
        const newUser = req.body;
    console.log(newUser);
    fs.readFile("./modules/users.js", "utf-8", (err, result)=>{
        const users = JSON.parse(result);
        // console.log(users)
        users.push(newUser);
        // res.send(users);
        res.send(req.myname)
        fs.writeFile("./modules/users.js", JSON.stringify(users,null, 2), (err)=>{});
        // res.send()
    })
    // console.log(body)
    // res.send("user get");
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000, ()=>{
    console.log("server running", 5000)
})