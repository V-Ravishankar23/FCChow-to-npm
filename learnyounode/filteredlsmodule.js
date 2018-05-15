var ls = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

ls(dir, ext, function(err, data) {
  if(err) {
    throw err;
  }
  else {
    for (let i = 0; i < data.length; i++){
      console.log(data[i]);
    }
  }
});