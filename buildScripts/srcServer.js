var express = require('express');
const app = express();
var path = require('path');
var open = require('open');


const port = 3000;



console.log(__dirname);
//routes
//// __dirname is our current directory
app.get('/', function(req, res) {
  //
  res.sendFile(path.join(__dirname, '../src/index.html'));
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
