const express=require("express");

const app =new express();
const PORT=4000;

app.get('/',function(req,res){
    res.send("node and express server is running at "+PORT);
});

app.listen(PORT,function(){
    console.log("server is running at "+PORT);
});
