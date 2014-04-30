var express = require('express');
var app = express();

// New call to compress content
app.use(express.compress());

app.use('/', express.static(__dirname + '/src/app'));

app.listen(process.env.PORT || 3000);

console.log("Server running ...");