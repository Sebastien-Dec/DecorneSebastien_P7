const express = require('express');
const router = express.Router();

//Require user authentication
const auth = require('../middleware/authorize');

//Access middleware
const publicationCtrl = require('../controllers/publications');

//Creating routes
router.post('/', auth, publicationCtrl.createPublication);
router.put('/:id', auth, publicationCtrl.modifyPublication);
router.delete('/:id', auth, publicationCtrl.deletePublication);
router.get('/', auth, publicationCtrl.getAllPublication);

module.exports = router;