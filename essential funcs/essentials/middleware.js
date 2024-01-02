const cors = require('cors');

let configs = {
    "preflightContinue": false,
    "origin": 'https://tame-pear-duck-sock.cyclic.app',
    "optionsSuccessStatus": 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
var allowlist = ['http://localhost:5173/']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    const origin = req.get('Origin');
    console.log(allowlist.indexOf(req.header('origin')));
    console.log(origin);
    if (allowlist.indexOf(req.header('origin')) !== -1) {

        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
        callback(null, corsOptions) // callback expects two parameters: error and options
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
}



module.exports={corsMiddleware:cors(corsOptionsDelegate)}