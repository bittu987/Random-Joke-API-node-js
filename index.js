const express = require('express');
const jokeData = require('./database.json');

const server = express();
const Port = 4080;

let dataLength = jokeData.length;
let randomIndex;



server.get("/random/joke/api",(req,res)=>{
    randomIndex = (Math.random()*dataLength) | 0;
    res.send(jokeData[randomIndex]); 
})



server.listen(Port,()=>{
    console.log(`Server Started at Port no ${Port}`);
})

