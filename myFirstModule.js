var fs = require('fs');
var pathModule = require('path');

function readFolder(folder, filterExtension, cbFunc) {
	fs.readdir(folder, function(err,data) {
		if (err)
			return cbFunc(err);
			
		var result = [];
		for (var i in data) {
			if (pathModule.extname(data[i]) == ('.' + filterExtension))
				result.push(data[i]);
		};

		cbFunc(null,result);
	});
};

module.exports = readFolder;