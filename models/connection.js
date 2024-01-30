const mongoose = require("mongoose")


const connexionString = 'mongodb+srv://ericnoblot:32oiYHvIUbmbeISu@cluster0.e4l2f8n.mongodb.net/tickethack'

mongoose.connect(connexionString, {connectTimeoutMS: 2000})
.then(() => console.log("Database Connected"))
.catch(error => console.log(error))