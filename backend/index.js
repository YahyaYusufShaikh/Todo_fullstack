const express = require("express");
const port = 3000;
const app = express();

app.use(express.json())
app.get('/', (req, res)=>{
    res.json("hello there i am the boss")
})


app.listen(port, ()=>{
    console.log(`server started on ${port}`);
})