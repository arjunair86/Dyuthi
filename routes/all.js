'use strict';

const express = require('express');
const allRouter = express.Router();

const xlsx = require('xlsx');
const workbook = xlsx.readFile('dyuthi16_schedule.xlsx');

const sheet_name_list = workbook.SheetNames;
const worksheet = workbook.Sheets[sheet_name_list[0]];
const dyuthi = xlsx.utils.sheet_to_json(worksheet);


allRouter.route('/')
	.get(function(req, res){
		var result = {dyuthi};
		res.json(result);
	})

allRouter.route('/day1')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var i, k=0, result = [];
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 1'){
				result.push(dyuthi[i]);
				delete result[k].Day;
				k++;
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/day2')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var i, k=0, result = [];
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 2'){
				result.push(dyuthi[i]);
				delete result[k].Day;
				k++;
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/day3')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var i, k=0, result = [];
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 3'){
				result.push(dyuthi[i]);
				delete result[k].Day;
				k++;
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/upcoming')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var result = [], i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Status === 'Upcoming'){
				result.push(dyuthi[i]);
				delete result[i].Status;
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/ongoing')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var result = [], i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Status === 'Ongoing'){
				result.push(dyuthi[i]);
				delete result[i].Status;
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/:eventName')
	.get(function(req, res){
		var eventName = req.params.eventName;
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var result = [], i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Event === eventName){
				result.push(dyuthi[i]);
				delete result[i].Event;
			}
		}
		var result = {result};
		res.json(result);
});

module.exports = allRouter;