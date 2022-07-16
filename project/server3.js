const express = require("express");
 
const app = express();

app.use(express.json());

app.use(function(req,res,next){
    console.log("I ran")
    next();
})


app.post('/simple',function(req,res){
    let data=req.body;
    let lenght=Object.keys(data).length;
    // Object.keys(data)=>['name','age']  data obj k keys

    if(lenght==0){
        res.end('Kindly enter data in the body')
    }
    else{
        next();
    }
})


app.post('/simple',function(req,res){
    console.log('data',req.body)
    res.end('post wala hello from server');
})


app.listen(3000,function(){
    console.log('server started at ported 3000')
})
