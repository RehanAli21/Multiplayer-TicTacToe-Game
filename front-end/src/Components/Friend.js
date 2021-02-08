import React, { useState } from 'react'
import Join from './FriendComponents/Join'
import NewGame from './FriendComponents/NewGame'

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
			<Join display={join ? 'block' : 'none'} />
			<NewGame display={newG ? 'block' : 'none'} />
		</div>
	)
}

export default Friend
