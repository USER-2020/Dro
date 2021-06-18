'use strict'

var express = require('express');
var ContactController = require('../controllers/contact');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploaDir: './uploads'});

router.get('/home', ContactController.home);
router.post('/test', ContactController.test);
router.post('/save-contact', ContactController.saveContact);
router.get('/contact/:id?', ContactController.getContact);
router.get('/contacts',ContactController.getContacts);
router.put('/contact/:id', ContactController.updateContact);
router.put('/contact/:id',ContactController.deleteContact);
router.post('/upload-img/:id', multipartMiddleware, ContactController.uploadImg);

module.exports = router;

