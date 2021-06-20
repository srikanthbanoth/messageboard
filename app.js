const { response, text } = require("express");
var express = require("express");
var app = express();
var http = require("http");

const port=process.env.PORT||8000;

// serving static css files
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use("/",require('./routes/index'))

http.createServer(app).listen(port, () => {
  console.log("Server Started On");
})
