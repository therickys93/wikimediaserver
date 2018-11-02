const express   = require('express')
var fs          = require('fs')
var path        = require('path')
const app       = express()
const port      = 3000
const directory = "./mediaserver"
const gitignore = ".gitignore"

app.use(express.static(path.join(__dirname, directory)))
app.use(express.static(path.join(__dirname, "./bower_components")))
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res){
	console.log("GET /");
	res.redirect('/files');
});

app.get('/status', function (req, res) {
	console.log("GET /status")
	var response = {"success":true}
	console.log(response)
	res.json(response)
})

app.get('/files', function(req, res){
	console.log("GET /files")
	fs.readdir(directory, function(err, items) {
		items = items.filter(function(e, i){
			return items[i].indexOf(gitignore) === -1
		})
		console.log(items)
		res.render('files', { title: 'Wiki MediaServer', files: items })
	})
})

app.get('/api/files', function(req, res){
	console.log("GET /api/files")
	fs.readdir(directory, function(err, items){
		items = items.filter(function(e, i){
			return items[i].indexOf(gitignore) === -1
		})
		console.log(items)
		res.json(items)
	})
})

app.get('/api/search/:name', function(req, res){
	console.log("GET /api/search/:name")
	var name = req.params.name
	fs.readdir(directory, function(err, items){
		items = items.filter(function(e, i){
			return items[i].indexOf(name) !== -1
		})
		console.log(items)
		res.json(items)
	})
})

app.listen(port, function () {
	console.log('Wiki Media Server listening on port ' + port + '!')
})
