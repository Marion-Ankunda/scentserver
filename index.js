const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes.js')
const authRoutes = require('./routes/authRoutes.js');
const { functions } = require("./essential funcs/firebase functions/init.js");
const { corsMiddleware } = require('./essential funcs/essentials/middleware.js')
const Port = process.env.PORT || 3000
app.use(cors())
app.use(emailRoutes)
app.use(authRoutes)

app.get('/', corsMiddleware, (req, res, next) => {
    res.send('Connected')
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(Port, () => {
        console.log('Connected on ' + ' http://localhost:' + Port + '/')
    })
}
module.exports = app
exports.app = functions.https.onRequest(app);
