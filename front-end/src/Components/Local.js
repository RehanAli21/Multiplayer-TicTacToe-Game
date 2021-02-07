import React, { useState } from 'react'
import GameUI from './GameUI'

const Local = () => {
	const [player, setPlayer] = useState('one')
	const [winner, setWinner] = useState('')

	return (
		<div className='local'>
			<div className='names'>
				<h2 style={{ color: player === 'one' ? '#07E672' : 'white' }}>
					Player 1
				</h2>
				<h2 style={{ color: player === 'two' ? '#07E672' : 'white' }}>
					Player 2
				</h2>
			</div>
			<GameUI
				player={player}
				setPlayer={setPlayer}
				setWinner={setWinner}
			/>
		</div>
	)
}

export default Local
