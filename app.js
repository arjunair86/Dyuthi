const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1050;
const app = express();

app.use(bodyParser.urlencoded({ extended :true }));
app.use(bodyParser.json());

app.use('/all', require('./routes/all'));

app.listen(port, function(){
	console.log('Server listening to port', port);
});
