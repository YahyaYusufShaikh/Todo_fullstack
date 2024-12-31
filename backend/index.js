const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const port = 3000;
const app = express();

app.use(express.json())

app.post('/todo', async(req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });
    res.json({
        msg: "todo created"
    })
})

app.get('/todos', async(req, res)=>{
    const todos = await todo.find({})
    console.log(todos)
})

app.put('/completed', async(req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed : true
    });
    res.json({
        msg:"Todo Marked as completed"
    });

})

app.listen(port, ()=>{
    console.log(`server started on ${port}`);
})