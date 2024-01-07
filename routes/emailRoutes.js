const { sendEmail } = require('../essential funcs/generateEmail/sendMail');

const router = require('express').Router()

router.get('/scentsational/sendEmail/', (req, res) => {
    sendEmail(req.query)
})

module.exports = router;