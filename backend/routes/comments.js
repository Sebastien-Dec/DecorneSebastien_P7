const express = require('express');
const router = express.Router();

//Require user authentication
const auth = require('../middleware/authorize');

//Access middleware
const commentCtrl = require('../controllers/comments');

//Creating routes
router.post('/', auth, commentCtrl.createComment);
router.put('/:id', auth, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);
router.get('/', auth, commentCtrl.getAllComment);

module.exports = router;