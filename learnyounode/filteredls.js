var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
fs.readdir(path, function(err,list){
  for(let i = 0; i < list.length; i++){
    var thisExt = list[i].split('.')[1];
    if(thisExt == ext) {
      console.log(list[i]);
    }
  }
});