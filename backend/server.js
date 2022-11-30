const express = require("express")
const Task = require("./model/taskModal")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const taskRouter = require("./routers/taskRoutes")
const cors = require("cors")
const app = express()


/////////////////////middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());
  

///////////////////user Routs
app.use("/api/tasks", taskRouter)




////////////////////////////////////////////
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).then(()=> app.listen(PORT, ()=>{
    console.log(`we are listening at ${PORT}`);
})
).catch((err)=> console.log(err))

