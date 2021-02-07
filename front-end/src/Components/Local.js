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
			<div
				style={{
					zIndex:
						winner === 'X' || winner === 'O' || winner === 'D'
							? 0
							: -1
				}}
				className='layer'></div>
			<div
				style={{
					display:
						winner === 'X' || winner === 'O' || winner === 'D'
							? 'block'
							: 'none'
				}}
				className='result'>
				<h1>
					{winner === 'X'
						? 'Player 1 Wins'
						: winner === 'O'
						? 'Player 2 Wins'
						: winner === 'D'
						? 'Draw'
						: null}
				</h1>
				<div>
					<button>Main Menu</button>
					<button>Restart Game</button>
				</div>
			</div>
		</div>
	)
}

export default Local
