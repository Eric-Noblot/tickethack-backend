require("dotenv").config() // Lien .env (LIGNE 1 !!!)
require("./models/connection") // Fichier de connection à la BDD Mongoose très important !

var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

// var indexRouter = require("./routes/index")
var tripsRouter = require("./routes/trips") // Ajouter si vous voulez créer un nouveau fichier de route

var app = express()

const cors = require("cors") // Installation de Cors
app.use(cors()) // Installation de Cors

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// app.use("/", indexRouter)
app.use("/trips", tripsRouter) // Ajouter si vous voulez créer un nouveau fichier de route

module.exports = app