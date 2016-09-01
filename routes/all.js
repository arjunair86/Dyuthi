'use strict';

const express = require('express');
const allRouter = express.Router();

allRouter.route('/')
	.get(function(req, res){
		var dyuthi = res.locals.dyuthi;		
		var result = {dyuthi};
		res.json(result);
});

allRouter.route('/day1')
	.get(function(req, res){
		var dyuthi = res.locals.dyuthi;
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
		var dyuthi = res.locals.dyuthi;
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
		var dyuthi = res.locals.dyuthi;
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
		var dyuthi = res.locals.dyuthi;
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
		var dyuthi = res.locals.dyuthi;
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

		var dyuthi = res.locals.dyuthi;
		var result = [], i;
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Event === eventName){
				result.push(dyuthi[i]);
				eventType = dyuthi[i].Type;
			}
		}

		var result = {result};		
		res.json(result);
});

module.exports = allRouter;
