var app = require('express')()

app.listen(3000, ()=>console.log("Listening on port 3000"))	// to log add a labda

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html')
})