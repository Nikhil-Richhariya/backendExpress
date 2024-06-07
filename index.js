require('dotenv').configDotenv()
const express = require('express') // 1 
// import express from "express" // 2 same as line 1
// 1 and 2 are same common js and module js

const port = 4000

const app = express() // app is a object or variable 

// we have multiple ports on our computer 65k something , many of them are free which we can use 

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// if we listen anything at the route , we will send a response using call back  

// req -> request
// res -> response , we can sen lot of thing using res

app.get('/twitter', (req, res) => {
    res.send('dicodingNikhil')
})

app.get('/login', (req,res) => {
    res.send("<h1>Please login at my website </h1>")
})

app.get('/youtube', (req,res) => {
    res.send("<h2>youtube.com/@decodingNikhil</h2> ")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})