const express = require("express")
const connect = require("./config/db")
const QRoute = require("./routes/quiz.route")
const app = express()
app.use(express.urlencoded({extended: true }))
app.use(express.json())
require("dotenv").config()

app.use("/quiz",QRoute)

app.listen(process.env.PORT , ()=>{
    connect()
    console.log(`port is strat ${process.env.PORT}`)
})
