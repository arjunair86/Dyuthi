'use strict';

const express = require('express');
const allRouter = express.Router();
const fs = require('fs');

const xlsx = require('xlsx');
const workbook = xlsx.readFile('dyuthi16_schedule.xlsx');

const sheet_name_list = workbook.SheetNames;
const worksheet = workbook.Sheets[sheet_name_list[0]];
const dyuthi = xlsx.utils.sheet_to_json(worksheet);


var i;
for(i=0; i<dyuthi.length; i++){
	var eventType = dyuthi[i].Type;
	var eventName = dyuthi[i].Event;
	if(eventType !== "Expo"){
		var files = fs.readdirSync(__dirname + '/../public/imgs/' + eventType);
		var ename = eventName.replace(/ /g, '').toLowerCase();
			for (var j=0; j<files.length; j++){
				var cleanString = files[j].split('-')[0].split('.')[0].split(' ')[0].toLowerCase(); 
				if (ename.match(cleanString) != null ){
					dyuthi[i].Link = 'localhost:1050/public/imgs/'+eventType+'/'+files[j];
				}
			}	
		}
}

allRouter.route('/')
	.get(function(req, res){		
		var result = {dyuthi};
		res.json(result);
});

allRouter.route('/day1')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var i, result = [];
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 1'){
				result.push(dyuthi[i]);
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/day2')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var i, result = [];
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 2'){
				result.push(dyuthi[i]);
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/day3')
	.get(function(req, res){
		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var i, result = [];
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Day === 'Day 3'){
				result.push(dyuthi[i]);
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
			}
		}
		var result = {result};
		res.json(result);
});

allRouter.route('/:eventName')
	.get(function(req, res){
		
		var eventName = req.params.eventName;
		var eventType;

		var dyuthi = xlsx.utils.sheet_to_json(worksheet);
		var result = [], i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Event === eventName){
				result.push(dyuthi[i]);
				eventType = dyuthi[i].Type;
			}
		}

		var files = fs.readdirSync(__dirname + '/../public/imgs/' + eventType);
		var ename = eventName.replace(/ /g, '').toLowerCase();


		for (i=0; i<files.length; i++){
			var cleanString = files[i].split('-')[0].split('.')[0].toLowerCase(); 
			if (ename.match(cleanString) != null ){
				console.log(result[0]);
				result[0].Link = req.get('host')+'/public/imgs/'+eventType+'/'+files[i];
			}
		}

		var result = {result};		
		res.json(result);
});

module.exports = allRouter;