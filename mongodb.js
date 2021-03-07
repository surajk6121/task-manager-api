const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const objectID = mongodb.ObjectID

const id = new objectID()
console.log(id)
console.log(id.getTimestamp())


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true}, (error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    console.log('Connected correctly!')
    const db = client.db(databaseName)
    // db.collection('users').findOne({name:'saurav'},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch!')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').insertOne({
    //     name: 'Kumar',
    //     age: '23'
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'abhishek',
    //         age: '22'
    //     },
    //     {
    //         name: 'saurav',
    //         age: '24'
    //     }],(error,result)=>{
    //         if(error){
    //             return console.log('Unable to insert documents!')
    //         }
    //         console.log(result.ops)
    //     }
    // )

    // db.collection('users').find({name: 'Kumar'}).toArray((error,users)=>{
    //     console.log(users)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: 'true'
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: 'false'
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: 'false'
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert documents')
    //     }
    //     console.log(result.ops)

    // })
    db.collection('tasks').findOne({_id: new objectID("602521660510641a0080fcb6")},(error,task)=>{
        if(error){
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    // db.collection('users').updateOne({
    //     _id : new objectID("6021398769cbc04990eebc6d")
    // },{
    //     $set:{
    //         name: 'Rohaan'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: 'false'
    // },{
    //     $set: {
    //         completed: 'true'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        completed: 'true'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})