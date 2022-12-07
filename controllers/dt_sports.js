const DT_sports = require('../models/dt_sports')
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.modelById = (req, res, next, id) => {
	DT_sports.findById(id)
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
    const model = new DT_sports(req.body);
    model.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};