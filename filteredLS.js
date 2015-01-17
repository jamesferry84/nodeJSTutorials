var fs = require('fs');
var pathModule = require('path');


var readDirectory = fs.readdir(process.argv[2], function callback(err,data) {
	for (var i = 0; i < data.length; i++) {
		if (pathModule.extname(data[i]) == ('.' + process.argv[3]))
		{
			console.log(data[i]);
		}
	};
});