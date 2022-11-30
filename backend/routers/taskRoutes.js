const express = require("express")
const Task = require("../model/taskModal")
const {createTask, getTask, getSingleTask, deleteTask, updateTask} = require("../controller/taskController")
const router = express.Router()

///////////////////////Create a task
router.post("/", createTask)
/////////////////////get/read all tasks
router.get("/", getTask )
router.get("/:id", getSingleTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)


module.exports = router