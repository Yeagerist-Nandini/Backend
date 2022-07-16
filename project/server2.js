const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
// if you want to accept data in backend
//middleware  =>order matters
//is predefined
app.use(express.json());

app.use(function(req,res,next){
    console.log("I ran")
    next();
})

app.route(function(req,res){
    res.end("post wala hello from server")
}) 

app.post('/sayhello',function(req,res){
    console.log('data',req.body)
    res.end('post wala hello from server');
})


app.listen(3000,function(){
    console.log('server started at ported 3000')
})
