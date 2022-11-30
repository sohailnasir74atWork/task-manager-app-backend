const Task = require("../model/taskModal");

///////////////////////////////////////////////////creating task 
const createTask = async (req, res)=>{
    try{

const task = await Task.create(req.body)
             res.status(200).json(task)

    } catch(err){
res.status(500).json({msg:err.message})    
}
}
///////////////////////////////////////////////geting all tasks
const getTask = async (req, res)=>{
    try{
        const tasks = await Task.find()
    res.status(200).json(tasks)}
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

////////////////////////////////////////////geting single tasks
const getSingleTask = async (req, res)=>{
    const {id} = req.params
        try{
        const taskSingle = await Task.findById(id)
        if(!taskSingle) {return res.status(404).json(`Data not found against this id`) }
        res.status(200).json(taskSingle)}
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
////////////////////////////////////////////////////delete task
const deleteTask = async (req, res)=>{
    const {id} = req.params
        try{
        const deleteTask = await Task.findByIdAndDelete(id)
        if(!deleteTask) {return res.status(404).json(`Data not found against this id`) }
        res.status(200).json("Task has been deleted")}
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
////////////////////////////////////////////////////update task
const updateTask = async (req, res)=>{
    const {id} = req.params
        try{
        const updateTask = await Task.findByIdAndUpdate({_id:id},
        req.body,{new:true,runValidators:true}, )
        if(!updateTask) {return res.status(404).json(`Data not found against this id`) }
        res.status(200).json(updateTask)}
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
module.exports = {
    createTask,
    getTask,
    getSingleTask,
    deleteTask,
    updateTask
}