import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
const port = 3000;
const app = express();
const compiler = webpack(config);
//tell Express the other things we want to use
app.use(require('webpack-dev-middleware')(compiler, {
noInfo: true,
publicPath: config.output.publicPath
}));




//tell Express which routes to handle
////any refs to root is handled by the anon function
//// __dirname is our current directory
//// path joins the 2 route elements, whatever directory I'm in and relative path to index
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
