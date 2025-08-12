const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const menu = require('./models/menu');

const personRoutes = require('./router/personRouter');
app.use('/person',personRoutes);

const menuRouter = require('./router/menuRouter');
app.use('/menu', menuRouter);

app.get('/',  (req,res)=>{
    res.send("Welcome to the hotel ,, how may i help you ")
})
//  testing command
app.listen(3000,()=>{
    console.log("Server is runnning at 3000")
});