var express =require('express');
var app =express();
app.use(express.static(__dirname));
app.get('/',function(req,res){
    console.log("PATH"+__dirname);
    res.sendFile(__dirname+"/index.html");
   
})
var server = app.listen(8081,()=>{
    console.log("Running port is "+server.address().port);
})