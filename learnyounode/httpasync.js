const http = require('http');
const concat = require('concat-stream');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var request1 = new Promise(function(resolve,reject){
  http.get(url1, function(response){
    response.setEncoding('utf8');
    response.pipe(concat(function(data){
      resolve(data);
    }));
  });
});

var request2 = new Promise(function(resolve,reject){
  http.get(url2, function(response){
    response.setEncoding('utf8');
    response.pipe(concat(function(data){
      resolve(data);
    }));
  });
});

var request3 = new Promise(function(resolve,reject){
  http.get(url3, function(response){
    response.setEncoding('utf8');
    response.pipe(concat(function(data){
      resolve(data);
    }));
  });
});

Promise.all([request1,request2,request3]).then(function(values){
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
})