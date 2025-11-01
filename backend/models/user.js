const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tên không được để trống'],
        maxLength: [30, 'Tên của bạn không được vượt quá 30 ký tự']
    },
    email: {
        type: String,
        required: [true, 'Email không được để trống'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Mật khẩu không được để trống'],
        minlength: [6, 'Mật khẩu của bạn phải dài hơn 6 ký tự'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

module.exports = mongoose.model('User', userSchema);
