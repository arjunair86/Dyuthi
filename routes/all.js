const express = require('express');
const allRouter = express.Router();

const xlsx = require('xlsx');
const workbook = xlsx.readFile('sample2.xlsx');

allRouter.route('/')
	.get(function(req, res){
	var worksheet;
	var sheet_name_list = workbook.SheetNames;
	worksheet = workbook.Sheets[sheet_name_list[0]];
	dyuthi = xlsx.utils.sheet_to_json(worksheet);
	var result = {dyuthi};
	res.json(result);
});

module.exports = allRouter;