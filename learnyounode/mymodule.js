var fs = require('fs');

module.exports = function(dir,ext,callback) {
  fs.readdir(dir, function(err,list) {
    if (err) {
      callback(err,null);
    }
    else {
      var re = RegExp("\."+ext+"$",'i');
      var result = list.filter(function(item){
        return re.test(item);
      });
      callback(null, result);
    }
  });
}