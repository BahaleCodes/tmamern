const mongoose = require('mongoose');

const TMAmodelSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxlength: 52
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 52
        },
        age: {
            type: Number,
            required: true,
            maxlength: 5
        },
        sex: {
            type: String,
            required: true,
            maxlength: 10
        },
        status: {
            type: String,
            required: true,
            maxlength: 10
        },
        occupation: {
            type: String,
            required: true,
            maxlength: 10
        },
        contactnumber: {
            type: String,
            required: true,
            maxlength: 10
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        relationshipToChild: {
            type: String,
            maxlength: 10
        },
        guardFirstname: {
            type: String,
            maxlength: 52
        },
        guardLastname: {
            type: String,
            maxlength: 52
        },
        guardnumber: {
            type: String,
            maxlength: 10
        },
        guardemail: {
            type: String,
            unique: false
        },
        street: {
            type: String,
            required: true
        },
        suburb: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        postal_code: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("TMAModel", TMAmodelSchema);
