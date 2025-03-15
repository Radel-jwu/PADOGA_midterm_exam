const express = require('express');

const app = express();

app.get('/test', (req, res) => {

    res.json({message: 'Express is working! Write your full name'});
});

app.listen(3000, ()=>{
    console.log('Server is listening in port 3000');
});