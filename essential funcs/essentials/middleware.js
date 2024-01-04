const cors = require('cors');

let configs = {
    "preflightContinue": false,
    "origin": 'https://tame-pear-duck-sock.cyclic.app',
    "optionsSuccessStatus": 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
var allowlist = ['http://localhost:5173','scentsational-git-main-marions-projects-7c99b152.vercel.app','https://scentsational.vercel.app/']
var corsOptionsDelegate = function (req,res,next) {
    var corsOptions;
    console.log(req.header('origin'));
    console.log(req.headers.origin);
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
        next() // callback expects two parameters: error and options
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
}



module.exports = {corsOptionsDelegate }