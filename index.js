const express = require('express');
const app = express();
const port = 5000 || process.env.PORT ;
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());



app.get("/", (req, res)=>{
    res.send("Hello World!")
});


app.listen(port, ()=> {
    console.log(`server is runnring on port ${port} `)
});