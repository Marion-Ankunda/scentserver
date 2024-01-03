const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes.js')
const authRoutes = require('./routes/authRoutes.js');
const { functions } = require("./essential funcs/firebase functions/init.js");
const Port = process.env.PORT || 3000

var allowlist = ['scentsational-b1ue6858h-marions-projects-7c99b152.vercel.app','http://localhost:5173','scentsational-git-main-marions-projects-7c99b152.vercel.app','https://scentsational.vercel.app/']
var corsOptionsDelegate = function (req,res,next) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
        next() // callback expects two parameters: error and options
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
}
app.use(cors())
app.use(corsOptionsDelegate)
app.use(emailRoutes)
app.use(authRoutes)


app.get('/',  (req, res, next) => {
        res.send('Connected')
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(Port, () => {
        console.log('Connected on ' + ' http://localhost:' + Port + '/')
    })
}
module.exports = app
exports.app = functions.https.onRequest(app);
