const app = require('express')()
const server = require('http').createServer(app);
var io = require('socket.io')(server)


server.listen(3000, ()=>console.log("Listening on port 3000"))	// to log add a labda

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
	console.log('A connection was made ')
})