const express = require('express');
const router = require('./routes');
const app = express();

app.use('/views', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) =>{
  res.redirect('views/index.html');
});
app.use('/',router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});