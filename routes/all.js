'use strict';

const express = require('express');
const allRouter = express.Router();

const xlsx = require('xlsx');
const workbook = xlsx.readFile('sample2.xlsx');

var sheet_name_list = workbook.SheetNames;
var worksheet = workbook.Sheets[sheet_name_list[0]];
var dyuthi = xlsx.utils.sheet_to_json(worksheet);

allRouter.route('/')
	.get(function(req, res){
		var result = {dyuthi};
		res.json(result);
});

allRouter.route('/day1')
	.get(function(req, res){
		var result = {}, i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 1')
				result['event_'+i] = dyuthi[i];
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/day2')
	.get(function(req, res){
		var result = {}, i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 2')
				result['event_'+i] = dyuthi[i];
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/day3')
	.get(function(req, res){
		var result = {}, i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 3')
				result['event_'+i] = dyuthi[i];
		}
		var result = {result};
		res.json(result);
});

module.exports = allRouter;