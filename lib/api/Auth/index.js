var express = require('express');
var router = express.Router();

var check = require("./check");
var admcheck = require("./admcheck");
var authorization = require("./authorization")

router.use('/check', check);
router.use('/admcheck', admcheck);
router.use("/authorization", authorization)

module.exports = router;
