const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const emailRoutes = require('./routes/emailRoutes.js')
const authRoutes = require('./routes/authRoutes.js');
const { functions } = require("./essential funcs/firebase functions/init.js");
const { corsOptionsDelegate } = require('./essential funcs/essentials/middleware.js')
const Port = process.env.PORT || 3000

app.use(emailRoutes)
app.use(authRoutes)


app.get('/',  (req, res, next) => {
    corsOptionsDelegate(req, res, () => {    
        res.send('Connected')
    })
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(Port, () => {
        console.log('Connected on ' + ' http://localhost:' + Port + '/')
    })
}
module.exports = app
exports.app = functions.https.onRequest(app);
