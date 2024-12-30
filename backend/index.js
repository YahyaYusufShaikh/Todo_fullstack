const express = require("express");
const { createTodo, updateTodo } = require("./types");
const port = 3000;
const app = express();

app.use(express.json())

app.post('/todo', (req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
})

app.get('/todos', (req, res)=>{
    res.json("hello there i am the boss")
})

app.put('/completed', (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }

})

app.listen(port, ()=>{
    console.log(`server started on ${port}`);
})