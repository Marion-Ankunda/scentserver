const cors = require('cors');

let configs = {
    "preflightContinue": false,
    "origin": 'https://tame-pear-duck-sock.cyclic.app',
    "optionsSuccessStatus": 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
var allowlist = ['https://tame-pear-duck-sock.cyclic.app']
var corsOptionsDelegate = function (req,callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
        callback(null, corsOptions) // callback expects two parameters: error and options
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
}



module.exports = { corsMiddleware: cors(corsOptionsDelegate) }