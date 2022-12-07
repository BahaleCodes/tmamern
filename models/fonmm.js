const mongoose = require('mongoose');

const FONMMSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 52
        },
        last_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 52
        },
        age: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 5
        },
        sex: {
            type: String,
            trim: true,
            required: true,
            maxlength: 10
        },
        sub_district: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50
        },
        contact_number: {
            type: String,
            trim: true,
            required: true,
            maxlength: 10
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        guardFirstname: {
            type: String,
            trim: true,
            required: false,
            maxlength: 52
        },
        guardLastname: {
            type: String,
            trim: true,
            required: false,
            maxlength: 52
        },
        guardnumber: {
            type: String,
            trim: true,
            required: false,
            maxlength: 10
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("FONMM", FONMMSchema);
