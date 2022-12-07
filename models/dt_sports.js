const mongoose = require('mongoose');

const DT_SportsmodelSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true
		},
        lastName: {
			type: String,
			required: true
		},
        age: {
			type: String,
			required: true
		},
        sex: {
			type: String,
			required: true
		},
        school_grade: {
			type: String,
			required: true
		},
        school: {
			type: String,
			required: true
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
        medical_condition: {
			type: String,
			required: true
		},
        medical_insurance: {
			type: String,
			required: true
		},
        relationship: {
			type: String,
			required: true
		},
        guardfname: {
			type: String,
			required: true
		},
        guardlname: {
			type: String,
			required: true
		},
        guardnumber: {
			type: String,
			required: true
		},
        guardemail: {
			type: String,
			required: true
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model("DT_SportsModel", DT_SportsmodelSchema);