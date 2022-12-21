let express = require('express');
let controller = require('../Controllers/getData.controller');
let router = express.Router();


router.get('/', controller.index);

module.exports = router;