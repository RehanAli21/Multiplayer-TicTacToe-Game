const http = require('http')
const server = http.createServer()
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
		methods: ['GET']
	}
})

io.on('connection', socket => {
	console.log('connected')

	socket.on('disconnect', () => console.log('disconnected'))
})

server.listen(5000, () => console.log('listening on 5000'))
