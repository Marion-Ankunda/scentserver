const cors = require('cors');
var allowlist = ['http://localhost:5173', 'scentsational-git-main-marions-projects-7c99b152.vercel.app', 'https://scentsational.vercel.app/']
async  function corsOptionsDelegate (req,res,next) {
    console.log(req.header('origin'));
    console.log(req.headers.origin);
    var corsOptions;
    if (allowlist.indexOf(req.header('origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
       next() // callback expects two parameters: error and options
    } else {
        corsOptions = { origin: false } // disable CORS for this request
        res.send('No access to this site')
    }
}



module.exports = { corsOptionsDelegate }