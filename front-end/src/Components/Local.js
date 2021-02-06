import React from 'react'
import GameUI from './GameUI'

const Local = () => {
	return (
		<div className='local'>
			<div className='names'>
				<h2>Player 1</h2>
				<h2>Player 2</h2>
			</div>
			<GameUI />
		</div>
	)
}

export default Local
