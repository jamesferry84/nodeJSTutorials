var fs = require('fs');
var buff = fs.readFile(process.argv[2], function finished(err,data) {
	var result = data.toString().split('\n').length - 1;
	console.log(result);
});