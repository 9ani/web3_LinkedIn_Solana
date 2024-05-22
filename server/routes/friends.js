const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/request', async (req, res) => {
    const { fromPublicKey, toPublicKey } = req.body;
    const fromUser = await User.findOne({ publicKey: fromPublicKey });
    const toUser = await User.findOne({ publicKey: toPublicKey });

    if (!fromUser || !toUser) return res.status(404).send('User not found');

    fromUser.friendRequests.push(toUser._id);
    await fromUser.save();

    res.send('Friend request sent');
});

router.post('/accept', async (req, res) => {
    const { fromPublicKey, toPublicKey } = req.body;
    const fromUser = await User.findOne({ publicKey: fromPublicKey });
    const toUser = await User.findOne({ publicKey: toPublicKey });

    if (!fromUser || !toUser) return res.status(404).send('User not found');

    toUser.friends.push(fromUser._id);
    fromUser.friends.push(toUser._id);

    await fromUser.save();
    await toUser.save();

    res.send('Friend request accepted');
});

module.exports = router;
