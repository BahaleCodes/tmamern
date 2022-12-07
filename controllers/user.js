const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { first_name, last_name, email, backup_email, cell_number, password } = req.body;

    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!first_name) {
            return res.status(400).json({
                error: 'First Name is required'
            });
        } else {
            user.first_name = first_name;
        }
        if (!last_name) {
            return res.status(400).json({
                error: 'Last Name is required'
            });
        } else {
            user.last_name = last_name;
        }
        if (!cell_number) {
            return res.status(400).json({
                error: 'Phone Number is required'
            });
        } else {
            user.cell_number = cell_number;
        }
        if (!email) {
            return res.status(400).json({
                error: 'E-mail is required'
            });
        } else {
            user.email = email;
        }
        if (!backup_email) {
            return res.status(400).json({
                error: 'Back-up E-mail is required'
            });
        } else {
            user.backup_email = backup_email;
        }
        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};
