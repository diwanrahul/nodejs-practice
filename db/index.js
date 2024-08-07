const UserSchema = require("./UserModel");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/node_to_mongo_connection")
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("mongo error", err));
