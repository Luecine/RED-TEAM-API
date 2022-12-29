var express = require('express');
var router = express.Router();
var Response = require('../../Response');
const {tokenCheck} = require("../../../middlewares/validateToken")
const statusCodes = require("../../statusCodes");

router.get("/",[tokenCheck], (req, res) => {
    var r = new Response();
    let {is_user} = req.body
    
    r.status = statusCodes.SUCCESS;
    r.data = {
        "message": is_user
    }
    console.log(r.data);
    return res.json(r);
})

module.exports = router;