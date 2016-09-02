const express = require('express');
const bodyParser = require('body-parser');
const fileRouter = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const m = fs.createReadStream(__dirname + '/../public/index.html',{encoding:'utf8'});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.xlsx');
  }
});
var upload = multer({ storage: storage });

fileRouter.route('/')
	.get(function (req, res) {
		res.sendFile(path.resolve(__dirname , '../public/file.html'));
})
	.post(upload.single('dyuthi16_schedule'),function(req, res) {
  		res.send('File has been uploaded successfully');
});

module.exports = fileRouter;
