'use strict';

const express = require('express');
const typeRouter = express.Router();

typeRouter.route('/:eventType')
	.get(function(req, res){
		
		var eventType = req.params.eventType;
		var dyuthi = res.locals.dyuthi;
		var result = [], i;
		
		for (i = 0; i<dyuthi.length; i++){
			if(dyuthi[i].Type === eventType){
				result.push(dyuthi[i]);
			}
		}

		result = {result};		
		res.json(result);
});

module.exports = typeRouter;
