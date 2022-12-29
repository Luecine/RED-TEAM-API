var express = require('express');
var router = express.Router();

var add = require("./add");
var approve = require("./approve");
var pending = require("./pending");
var view = require("./view");
<<<<<<< HEAD
var remove = require("./delete");   
=======
var delete2 = require("./delete");

>>>>>>> 2ed1637c7f4c416475e0fb026fa081f0a2e8409c

router.use("/add", add);
router.use("/approve", approve);
router.use("/pending", pending);
router.use("/view", view); // Give options on FE to see pending list as well
<<<<<<< HEAD
router.use("/delete", remove);
=======
router.use("/delete", delete2);
>>>>>>> 2ed1637c7f4c416475e0fb026fa081f0a2e8409c

module.exports = router;
