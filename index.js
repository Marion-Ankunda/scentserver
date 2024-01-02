const express = require('express')
const app = express()
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const emailRoutes = require('./routes/emailRoutes.js')
const authRoutes = require('./routes/authRoutes.js');
const { functions } = require("./essential funcs/firebase functions/init.js");
const Port = process.env.PORT || 3000

app.use(cors(corsOptions))
app.use(emailRoutes)
app.use(authRoutes)

app.get('/', (req, res) => {
    res.send('Connected')
})

// if (process.env.NODE_ENV !== 'test') {
//     app.listen(Port, () => {
//         console.log('Connected on ' + ' http://localhost:' + Port + '/')
//     })
// }
module.exports = app
exports.app = functions.https.onRequest(app);
