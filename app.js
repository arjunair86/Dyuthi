const express = require('express');
const bodyparser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 1050;
const app = express();

const xlsx = require('xlsx');

var workbook = xlsx.readFile('sample2.xlsx');


app.get('/all', function(req, res){
	var worksheet;
	var sheet_name_list = workbook.SheetNames;
	worksheet = workbook.Sheets[sheet_name_list[0]];
	dyuthi = xlsx.utils.sheet_to_json(worksheet);
	var result = {dyuthi};
	res.json(result);
});

app.listen(port, function(){
	console.log('Server listening to port', port);
});
