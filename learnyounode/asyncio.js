var fs = require('fs');

var filePath = process.argv[2];
fs.readFile(filePath, function(err, data){
  var contents = data.toString();
  contents = contents.split('\n');
  lines = contents.length - 1;
  console.log(lines);
});