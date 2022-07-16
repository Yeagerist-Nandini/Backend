const express = require("express");
const app = express();
const UserModel = require("./userModel");

// signup  input:
// name,
// password,
// confirmpassword
// address
// email,
// phonenumber,
// pic,
app.use(express.json());
app.post("/signup", async function (req, res) {
    let data = req.body;
    console.log(data);
    // to create 
    let newUser = await UserModel.create(data);
    console.log(newUser);
    res.end("data recieved");
})


app.listen(3000, function () {
    console.log("server started at port 3000");
})