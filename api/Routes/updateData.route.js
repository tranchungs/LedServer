let express = require('express');
let controller = require('../Controllers/updateData.controller');
let router = express.Router();


router.post('/', controller.index);

module.exports = router;