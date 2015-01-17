var path = require('path');
var myModule = require('./myFirstModule');


myModule(process.argv[2], process.argv[3], function callback(err,data) {
	if (err)
	{
		console.log("Went Wrong!");
	}
	else
	{
		for (var i in data)
			console.log(data[i]);
	}
});

