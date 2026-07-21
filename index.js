require("dotenv").config();
const express = require('express');
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("Hello send");
});
app.get('/home', (req,res)=>
{
    res.send('my name');
});
app.get('/about',(req,res)=>
{
    res.send('welcome my project');
});
app.get('/login',(req,res)=>
{
    res.send('login');
});
app.get('/chai',(req,res)=>
{
    res.send('chai');
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});