var fs = require('fs');
var filename = process.argv[2];
var myFile = fs.readFileSync(filename);
var contents = myFile.toString();
var myArr = contents.split('\n');
var lines = myArr.length - 1;
console.log(lines);