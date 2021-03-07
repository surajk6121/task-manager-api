const express = require('express')
const Task = require('./models/tasks')
require('./db/mongoose')
const User = require('./models/users')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT 

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('Get requests are disabled.')
//     }
//     else{
//         next()
//     }
// })
// Express middleware Demo
// app.use((req,res,next)=>{
//     res.status(500).send('Application under maintenance. Try again later.')
// }
// )

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})


//Populate using mongoose relations between two models(using ref)
// const main =async ()=>{
//     // const task = await Task.findById('603b78940f5a3b48742f4d2c')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('603b78740f5a3b48742f4d2a')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()