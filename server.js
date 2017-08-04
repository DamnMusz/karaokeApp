var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var app = express();

app.use(express.static('web'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())
   
app.use(cookieParser());

app.post("/api/login", function (req, res) {
}); 

app.get("/api/logout", function (req, res) {
});

app.get("/api/user", function (req, res) {
    //res.send(usuariosService.getUsuarios());
});

app.put("/api/user", function (req, res) {
});

app.get("/api/test", function (req, res) {
	res.send("Test OK");
});


var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})


var fs = require('fs');

var getAllFiles = function(dir) {
    var results = [];

    fs.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(file))
        } else {
			results.push( {url: file.replace('./web',''), text:file.split("./web")[1]} );
		}

    });

    return results;
};

app.get("/api/imageCandidates", function (req, res) {
	var type = req.query['type'];	
	var dir = "./web/dist/img/" + type;

	res.send(getAllFiles(dir));
});