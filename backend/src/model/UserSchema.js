import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    user_email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: string,
        required: true
    },
    birth_date:{
        type: string,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);