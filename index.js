const express = require("express");
const app = express();
const sendMail = require('./controller/sendMail');
const port = 3000;

app.get('/', (req,res) => {
    res.send("I am a server");
})
app.get('/mail',sendMail);

const start = async () => {
    try{
       await app.listen(port, (err) => {
            console.log(`I am live on port ${port}`)
        })
    }catch(error){}
};

start();
