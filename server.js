var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// app.use(express.static(path.join(__dirname + '/css')));

// app.use(express.static('public'))
app.use(express.static('app'))
app.use(express.static('models'))
app.use(express.static('controllers'))

app.get('/', function(req, res){
  res.sendfile('index.html')
});

io.on('connection', function(socket){

    console.log('CONNECTED')

})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
    console.log('message: ' + msg)
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})
