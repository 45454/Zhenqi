var express = require('express')
var router = express.Router()
var fs = require('fs');
var bodyParser=require('body-parser');

router.post('/',function (req,res) {

    const result = JSON.stringify(req.body)
    console.log(result.param)
    fs.writeFile("./public/json/source.json",
        result,
        // req.body,
        function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
})

module.exports = router