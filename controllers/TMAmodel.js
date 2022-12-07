const TMAModel = require('../models/TMAmodel');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.modelById = (req, res, next, id) => {
    TMAModel.findById(id)
        .exec((err, model) => {
            if (err || !model) {
                return res.status(400).json({
                    error: 'Model not found'
                });
            }
            req.model = model;
            next();
        });
};

exports.read = (req, res) => {
    return res.json(req.model);
};

exports.create = (req, res) => {
    const model = new TMAModel(req.body);
    model.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.remove = (req, res) => {
    let model = req.model;
    model.remove((err, deletedModel) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Model deleted successfully'
        });
    });
};

exports.update = (req, res) => {
    const model = req.model;
    if (!model.firstName) {
        return res.status(400).json({
            error: "First Name is required"
        });
    } else {
        model.firstName = req.body.firstName;
    }
    if (!model.lastName) {
        return res.status(400).json({
            error: "Last Name is required"
        });
    } else {
        model.lastName = req.body.lastName;
    }
    if (!model.age) {
        return res.status(400).json({
            error: "Age is required"
        });
    } else {
        model.age = req.body.age;
    }
    if (!model.status) {
        return res.status(400).json({
            error: "Status is required"
        });
    } else {
        model.status = req.body.status;
    }
    if (!model.occupation) {
        return res.status(400).json({
            error: "Occupation is required"
        });
    } else {
        model.occupation = req.body.occupation;
    }
    if (!model.contactnumber) {
        return res.status(400).json({
            error: "Phone Number is required"
        });
    } else {
        model.contactnumber = req.body.contactnumber;
    }
    if (!model.email) {
        return res.status(400).json({
            error: "Email is required"
        });
    } else {
        model.email = req.body.email;
    }
    if (!model.relationshipToChild) {
        return res.status(400).json({
            error: "Relationship to Child is required"
        });
    } else {
        model.relationshipToChild = req.body.relationshipToChild;
    }
    if (!model.guardFirstname) {
        return res.status(400).json({
            error: "Guardian First Name is required"
        });
    } else {
        model.guardFirstname = req.body.guardFirstname;
    }
    if (!model.guardLastname) {
        return res.status(400).json({
            error: "guardian Last Name is required"
        });
    } else {
        model.guardLastname = req.body.guardLastname;
    }
    if (!model.guardnumber) {
        return res.status(400).json({
            error: "Guardian Number is required"
        });
    } else {
        model.guardnumber = req.body.guardnumber;
    }
    if (!model.guardemail) {
        return res.status(400).json({
            error: "Guardian Email is required"
        });
    } else {
        model.guardemail = req.body.guardemail;
    }
    if (!model.height) {
        return res.status(400).json({
            error: "height is required"
        });
    } else {
        model.height = req.body.height;
    }
    if (!model.weight) {
        return res.status(400).json({
            error: "weight is required"
        });
    } else {
        model.weight = req.body.weight;
    }
    if (!model.waist) {
        return res.status(400).json({
            error: "waist is required"
        });
    } else {
        model.waist = req.body.waist;
    }
    if (!model.shoesize) {
        return res.status(400).json({
            error: "shoe size is required"
        });
    } else {
        model.shoesize = req.body.shoesize;
    }
    if (!model.shirtsize) {
        return res.status(400).json({
            error: "shirt size is required"
        });
    } else {
        model.shirtsize = req.body.shirtsize;
    }
    
    model.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Model Update Failed"
            });
        }
        res.json(data);
    });
};

exports.list = (req, res) => {
    TMAModel.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
