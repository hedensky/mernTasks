const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) =>{
    const task = await Task.find();
    res.json(task);
});

router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req,res) =>{
    const {title, description} = req.body;
    const task = new Task ({title, description});

    await task.save();
    res.json({status:'Task saved.'})
});

router.put('/:id', async (req,res)=>{
    const newTask = req.body;
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status:'Task updated.'})
});

router.delete('/:id', async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task deleted.'});
});

module.exports = router;