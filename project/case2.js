const express = require("express");
 
const app = express();

app.use(function(req,res){
    res.end("use will always run");
})

app.post("/simple",function(req,res){
    res.end("simple post output");
})

app.patch("/simple",function(req,res){
    res.end("simple patch output");
})

app.delete("/simple",function(req,res){
    res.end("simple delete output");
})



app.listen(3000,function(){
    console.log('server started at ported 3000')
})

//output will be use will always run
//when a request is send then it will execute all the handlers serially