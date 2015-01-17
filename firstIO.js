var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();

var delimitedString = str.split('\n');
var numberOfLines = delimitedString.length;
console.log(numberOfLines - 1);