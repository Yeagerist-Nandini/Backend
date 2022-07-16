const express = require("express");
const { nextTick } = require("process");
 
const app = express();
app.use(express.json())

app.use(function(req,res){
    console.log("use will always run");
    next();
})

app.post("/simple",function(req,res){
    console.log('data',req.body);
    res.end("simple post output");
})

app.post("/simple",function(req,res){
    res.end("simple1 post output");
})

app.listen(3000,function(){
    console.log('server started at ported 3000')
})

//output =>backend =>will be use will always run
//output =>frontend =>will be simple post output
//next sends requests to the handler below you
//      if request hits your handler
//            use->it will always execute the function
//            get->route + get method then it will execute
//            post->route + post method then it will execute
//            patch->route + patch method then it will execute
//            delete->route + delete method then it will execute