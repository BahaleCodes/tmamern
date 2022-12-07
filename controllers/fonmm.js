const fonmm = require('../models/fonmm');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.applicantById = (req, res, next, id) => {
    fonmm.findById(id)
        .exec((err, applicant) => {
            if (err || !applicant) {
                return res.status(400).json({
                    error: 'Applicant not found'
                });
            }
            req.applicant = applicant;
            next();
        });
};

exports.read = (req, res) => {
    return res.json(req.applicant);
};

exports.create = (req, res) => {
    const applicant = new fonmm(req.body);
    applicant.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err.message
            });
        }
        res.json({ data });
    });
};

exports.remove = (req, res) => {
    let applicant = req.applicant;
    applicant.remove((err, deletedApplicant) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Applicant deleted successfully'
        });
    });
};

exports.update = (req, res) => {
    const applicant = req.applicant;
    if (!applicant.first_name) {
        return res.status(400).json({
            error: "First Name is required"
        });
    } else {
        applicant.first_name = req.body.first_name;
    }
    if (!applicant.last_name) {
        return res.status(400).json({
            error: "Last Name is required"
        });
    } else {
        applicant.last_name = req.body.last_name;
    }
    if (!applicant.age) {
        return res.status(400).json({
            error: "Age is required"
        });
    } else {
        applicant.age = req.body.age;
    }
    if (!applicant.contact_number) {
        return res.status(400).json({
            error: "Phone Number is required"
        });
    } else {
        applicant.contact_number = req.body.contact_number;
    }
    if (!applicant.email) {
        return res.status(400).json({
            error: "Email is required"
        });
    } else {
        applicant.email = req.body.email;
    }
    if (applicant.guardFirstname) {
        applicant.guardFirstname = req.body.guardFirstname;
    }
    if (applicant.guardLastname) {
        applicant.guardLastname = req.body.guardLastname;
    }
    if (applicant.guardnumber) {
        applicant.guardnumber = req.body.guardnumber;
    }
    
    applicant.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Applicant Update Failed"
            });
        }
        res.json(data);
    });
};

exports.list = (req, res) => {
    fonmm.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
