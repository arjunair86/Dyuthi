const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1050;
const app = express();
const fs = require('fs');

const xlsx = require('xlsx');
const workbook = xlsx.readFile('dyuthi16_schedule.xlsx');
const sheet_name_list = workbook.SheetNames;
const worksheet = workbook.Sheets[sheet_name_list[0]];
const dyuthi = xlsx.utils.sheet_to_json(worksheet);

app.use(bodyParser.urlencoded({ extended :true }));
app.use(bodyParser.json());

app.use('/public', express.static('public'));

var addLinks = function(req, res, next){
	for(var i=0; i<dyuthi.length; i++){
		var eventType = dyuthi[i].Type;
		var eventName = dyuthi[i].Event;
		if(eventType !== "Expo"){
			var files = fs.readdirSync(__dirname + '/public/imgs/' + eventType);
			var ename = eventName.replace(/ /g, '').toLowerCase();
				for (var j=0; j<files.length; j++){
					var cleanString = files[j].split('-')[0].split('.')[0].split(' ')[0].toLowerCase(); 
					if (ename.match(cleanString) != null ){
						dyuthi[i].Link = req.get('host') + '/public/imgs/' + eventType + '/' + files[j];
					}
				}	
			}
	}
	res.locals.dyuthi = dyuthi;
	next();
}
app.use(addLinks);

app.use('/all', require('./routes/all'));

app.listen(port);
