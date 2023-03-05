const express = require('express');
const bodyParser = require('body-parser')

const PORT = 3000;

const app = new express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 
app.set("view engine", "ejs");


app.get('/', function(req, res){
    res.render("proximamente")
});


app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
})
