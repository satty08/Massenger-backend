// import dependencies
const express = require('express')
const cors = require('cors')
const Pusher = require('pusher')
const mongoose = require('mongoose')
const mongoMessage = require('./messageModel')

// app config
const app = express()
const port = process.env.PORT || 9000

//middleware


//db config
const uri = 'mongodb+srv://satty:Satyam1408@cluster0.2gapm.mongodb.net/messangerdb?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.connection.once('open', () => {
    console.log('connected');
})

// api routes
app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})
app.post('/save/message', (req, res) => {
    const dbMessage = req.body

    mongoMessage.create(dbMessage, (error, data) => {
        if (error) {
            return res.status(500).send(error)
        }

        res.status(201).send(data)
    })
})

//listen
app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})