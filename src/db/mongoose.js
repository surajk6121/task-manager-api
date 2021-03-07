const mongoose = require('mongoose')
const { default: validator } = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User',{
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value){
//             if(!value){
//                 throw new Error('Password length should be greater than 0.')
//             }
//             if(value.includes('password')){
//                 throw new Error('Try a different password')
//             }
//         }
//     }
// })
// const tasks = mongoose.model('Tasks',{
//     description:{
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed:{
//         type:String,
//         default: false
//     }
// })

// const me= new User({
//     name: 'Archana',
//     email: 'x@x.com',
//     age: 23,
//     password: 'password1'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

// const task= new tasks({
//     description: 'Learn Nodejs',
//     completed: 'False'
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })