import React, { useState } from 'react'

const Friend = () => {
	const [phase1, setPhase1] = useState(true)
	const [join, setJoin] = useState(false)
	const [newG, setNewG] = useState(false)

	const joinGame = () => {
		setPhase1(false)
		setJoin(true)
	}

	const newGame = () => {
		setPhase1(false)
		setNewG(true)
	}

	return (
		<div className='friend'>
			<div style={{ display: phase1 ? 'block' : 'none' }} className='ask'>
				<button onClick={joinGame}>Join a Game</button>
				<button onClick={newGame}>Start a new Game</button>
			</div>
			<div style={{ display: join ? 'block' : 'none' }} className='join'>
				<h1>Join Game with key</h1>
				<input type='text' placeholder='Enter the key...' />
				<button>Join</button>
			</div>
			<div style={{ display: newG ? 'block' : 'none' }} className='start'>
				<h3>asdjhkjh234jhsdf812kklk231e1123</h3>
				<p>
					Copy this key and send it to your friend and ask friend to
					join using this key.
				</p>
				<div className='loading'>
					<h1>Waiting for friend to join...</h1>
				</div>
			</div>
		</div>
	)
}

export default Friend
