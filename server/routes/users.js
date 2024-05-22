const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    const { publicKey, name, bio, profilePicture } = req.body;
    try {
        const user = new User({ publicKey, name, bio, profilePicture });
        await user.save();
        console.log('User signed up:', user);
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:publicKey', async (req, res) => {
    try {
        const user = await User.findOne({ publicKey: req.params.publicKey });
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
