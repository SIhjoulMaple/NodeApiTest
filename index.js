const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{

    res.json("it Works");

});



app.listen(3001, () => {
    console.log('Server listing on port 3001');
});