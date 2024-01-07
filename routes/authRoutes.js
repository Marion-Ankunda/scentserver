const { FieldPath } = require('firebase-admin/firestore');
const { firebaseConfig } = require('../essential funcs/firebase functions/init');
const { corsOptionsDelegate } = require('../essential funcs/essentials/middleware');

const router = require('express').Router()

router.get('/scentsapi/signup', (req, res) => {
    corsOptionsDelegate(req, res, () => {
        try {
            signUpfunc(req.query.email, req.query.password).then((e) => {
                res.send(e)
            })
        } catch (error) {
            res.send('error')
        }
    })
})
router.get('/scentsapi/keys/auth', (req, res) => {
    console.log(12434);
    console.log(firebaseConfig);
    try {
        res.send(firebaseConfig)
    } catch (error) {
        console.log(error);
        res.send('error')
    }
})


module.exports = router;
