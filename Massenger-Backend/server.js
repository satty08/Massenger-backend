// import dependencies
import express from 'express'
import cors from 'cors'
import Pusher from 'pusher'
import mongoose from 'mongoose'

// app config
const app = express()
const port = process.env.PORT || 9000

//middleware


//db config


// api routes
app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

//listen
app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})