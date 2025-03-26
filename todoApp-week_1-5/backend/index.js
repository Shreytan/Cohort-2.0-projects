const express =  require('express');
const z = require('zod');
const { createTodo } = require('./type');
const { updateTodo } = require('./type');
const {todo} = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todos",async (req,res)=>{
    const todoName = req.body;
    const st =  createTodo.safeParse(todoName);
    if(!st.success){
        res.status(411).json({
            msg : "incorrect input user san"
        })
        return;
    }
    //mongodb thing
    await todo.create({
        title : todoName.title,
        description : todoName.description,
        completed : false
    });

    res.status(200).json({
        msg : "todo created successfully"
    })
});

app.get("/todo", async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos : todos
    })
});

app.put("/completed", async (req, res) => {
    const upd = req.body;
    const st2 = updateTodo.safeParse(upd); // Fix: Passing req.body instead of updateTodo

    if (!st2.success) {
        return res.status(411).json({
            msg: "incorrect input user san"
        });
    }

    const st = await todo.updateOne(
        { _id: req.body._id },
        { completed: true } // Direct update without $set
    );

    if(st.success){
        res.json({ msg: "Todo updated successfully" }); // Fix: Send a response to avoid hanging requests
    }

    else{
        res.status(411).json({
            "msg" : " not a success"
        })
    }

    
});

app.listen(3000);
