var httpModule = require('http');
var output = [];

var httpData = httpModule.get(process.argv[2], function callback(response) {
	response.setEncoding('utf8');
	response.on('data', function(input) {
		output.push(input);
	});
	response.on('error', console.error);
	response.on('end', function()
		{
			console.log(output.join("").length);
			console.log(output.join(""));
		});
});


// Official Solution
// var http = require('http')
 // var bl = require('bl')

 // http.get(process.argv[2], function (response) {
   // response.pipe(bl(function (err, data) {
 //     if (err)
 //       return console.error(err)
 //     data = data.toString()
 //     console.log(data.length)
 //     console.log(data)
 //   }))
 // })