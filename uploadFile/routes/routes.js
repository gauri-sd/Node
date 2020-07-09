const express = require('express');
const router = express.Router();

const multer = require('multer');

const UPLOAD_PATH = 'public';
const upload = multer({ dest: `${UPLOAD_PATH}/` }); 

const product_controller = require('../controllers/controller');

router.post('/upload', upload.single('file') , product_controller.uploadFile);

module.exports = router;
