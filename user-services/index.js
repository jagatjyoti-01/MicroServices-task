const express = require('express');
const app=express();

const bodyParser=require('body-parser');
const port=300;


app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("User Service is up and running");
})

app.listen(port,()=>{
    console.log(`User Service is running on port ${port}`);
})
