const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/:email-:password', async (req, res) => {
    try {
        const email = req.params.email;
        const password = req.params.password
        const user = await User.findOne({email: email, password: password})
        res.json({user})
    } catch(err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    try {
        const user = new User({
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        });
        const saveUser = await user.save();
        res.json(saveUser);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;