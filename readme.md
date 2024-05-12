http://localhost:4080/random/joke/api
Random Joke API
We have create a API for Random Joke. For which i have stored the jokes in the form of JSON. We are using the random joke from database and send to the client with the help of API.

Write a code for execution :
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