var express = require('express');
var app = express();

app.use(express.compress());

app.use('/', express.static(__dirname + '/src/app', {maxAge: 86400000}));


app.listen(process.env.PORT || 3000);

console.log("Server running ...");