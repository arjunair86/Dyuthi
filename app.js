const express = require('express');
const bodyparser = require('body-parser');
const router = express.Router();
const app = express();

const xlsx = require('xlsx');

var workbook = xlsx.readFile('sample2.xlsx');


app.get('/', function(req, res){
	var worksheet;
	var sheet_name_list = workbook.SheetNames;
	worksheet = workbook.Sheets[sheet_name_list[0]];
	fullJson = xlsx.utils.sheet_to_json(worksheet);
	res.send(xlsx.utils.sheet_to_json(worksheet));
});

app.listen(8000, function(){
	console.log('Server listening to port 8000');
});