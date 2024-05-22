const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    publicKey: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    bio: { type: String },
    profilePicture: { type: String },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('User', UserSchema);
