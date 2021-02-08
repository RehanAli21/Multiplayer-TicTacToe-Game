import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

let socket
const Friend = () => {
	const [userName, setUserName] = useState('')
	const [friendName, setFriendName] = useState('')
	const [phase1, setPhase1] = useState(true)
	const [join, setJoin] = useState(false)
	const [newG, setNewG] = useState(false)
	const [key, setKey] = useState('')

	useEffect(() => {
		socket = io('http://localhost:5000/')
		if (userName !== '') {
			socket.emit('join', { name: userName })

			socket.on('getKey', ({ key }) => {
				console.log(key)
			})
		}

		return () => {
			socket.emit('disconnection')
			socket.off()
		}
	}, [userName])

	const joinGame = () => {
		setPhase1(false)
		setJoin(true)
	}

	const newGame = () => {
		setPhase1(false)
		setNewG(true)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (e.target[0].value !== '') setUserName(e.target[0].value)
	}

	return (
		<div className='friend'>
			<div style={{ display: phase1 ? 'block' : 'none' }} className='ask'>
				<button onClick={joinGame}>Join a Game</button>
				<button onClick={newGame}>Start a new Game</button>
			</div>
			<div style={{ display: join ? 'block' : 'none' }} className='join'>
				<h1>Join Game with key</h1>
				<input type='text' placeholder='Enter your name...' />
				<input type='text' placeholder='Enter the key...' />
				<button>Join</button>
			</div>
			<div style={{ display: newG ? 'block' : 'none' }} className='start'>
				<form
					style={{ display: userName !== '' ? 'none' : 'block' }}
					onSubmit={handleSubmit}>
					<input type='text' placeholder='Enter your name...' />
					<button>Get Key</button>
				</form>
				<div style={{ display: userName !== '' ? 'block' : 'none' }}>
					<h3>Key: {key}</h3>
					<p>
						Copy this key and send it to your friend and ask friend
						to join using this key.
					</p>
					<div className='loading'>
						<h1>Waiting for friend to join...</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Friend
