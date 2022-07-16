const express = require("express");
 
const app = express();

app.get("/simple",function(req,res){
    res.end("simple2 output");
})

app.get("/simple",function(req,res){
    res.end("simple1 output");
})

app.get("/simple",function(req,res){
    res.end("simple output");
})



app.listen(3000,function(){
    console.log('server started at ported 3000')
})

//output will be simple2 output
//as soon as res.end line is executed there is not further execution of lower handler funtion
//even if they satifies all the condition 