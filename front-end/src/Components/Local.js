import React, { useState } from 'react'
import GameUI from './GameUI'

const Local = () => {
	const [player, setPlayer] = useState('one')

	return (
		<div className='local'>
			<div className='names'>
				<h2 style={{ color: player === 'one' ? 'green' : 'white' }}>
					Player 1
				</h2>
				<h2 style={{ color: player === 'two' ? 'green' : 'white' }}>
					Player 2
				</h2>
			</div>
			<GameUI player={player} setPlayer={setPlayer} />
		</div>
	)
}

export default Local
