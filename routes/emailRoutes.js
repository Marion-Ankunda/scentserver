const { corsMiddleware } = require('../essential funcs/essentials/middleware');
const { sendEmail } = require('../essential funcs/generateEmail/sendMail');

const router = require('express').Router()

router.get('/scentsational/sendEmail/', corsMiddleware ,(req, res) => {
  sendEmail(req.query)
})

module.exports = router;