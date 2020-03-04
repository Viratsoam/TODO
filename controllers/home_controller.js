//  import the models
const db = require('../models/model');

//  controller object.
const Controller = {};

// var for the todolist 
let todoList = [];

// home controller
Controller.home = (req, res)=>{
    db.connect();
    db.getData((err, data)=>{
        if(err) todoList = [];
        else todoList = data;
        return res.render('home', 
            {
                title: 'TodO App',
                data : todoList
            }
        );
    });
    
}

// Adding the element
Controller.addToDo = (req, res)=>{
    console.log(req.query);
    todoList.push(req.query);
    db.connect();
    db.addTask(req.query, (err, response)=>{
        if(err) console.log(err);
        res.redirect('back');
    });
}

// deleting the row
Controller.deleteToDo = (req, res) =>{
    console.log(req.query);
    db.connect();
    db.deleteTask(req.query, err=>{
        if(err) console.log(err);
        todoList = todoList.filter((value)=>value.task_desc != req.query.task_desc)
        res.redirect('back'); 
    });
    
}

// Export the module
module.exports = Controller;