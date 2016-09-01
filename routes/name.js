'use strict';

const express = require('express');
const nameRouter = express.Router();

nameRouter.route('/:eventName')
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

		result = {result};		
		res.json(result);
});

module.exports = nameRouter;
