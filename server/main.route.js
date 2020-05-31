const express = require('express')
const router = express.Router()
const path = require('path');

router.use(express.static(path.resolve('src/public')));

module.exports = router;