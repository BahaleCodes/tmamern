const express = require('express');
const router = express.Router();

const { create, applicantById, read, update, remove, list } = require('../controllers/fonmm');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/fonmm/application/:applicantId', read);
router.post('/fonmm/application/create', create);
router.put('/fonmm/application/update/:applicantId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/fonmm/application/delete/:applicantId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/fonmm/applications/list', list);

router.param('applicantId', applicantById);
router.param('userId', userById);

module.exports = router;
