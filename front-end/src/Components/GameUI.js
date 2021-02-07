import React, { useEffect } from 'react'

let grid = [
	['', '', ''],
	['', '', ''],
	['', '', '']
]

const GameUI = ({ player, setPlayer, setWinner, restart }) => {
	const insertValue = e => {
		if (e.target.innerHTML === '') {
			e.target.innerHTML = `<h1>${player === 'one' ? 'X' : 'O'}</h1>`

			const points = [
				e.target.id.split('')[e.target.id.length - 2],
				e.target.id.split('')[e.target.id.length - 1]
			]

			grid[points[0] - 1][points[1] - 1] = player === 'one' ? 'X' : 'O'

			const winner = winnerChecker()
			if (winner) {
				emptyGrid()
				setWinner(winner)
			} else {
				let gridComplete = false
				for (let row = 0; row < 3; row++) {
					for (let col = 0; col < 3; col++) {
						if (grid[row][col] === '') {
							gridComplete = false
							break
						} else gridComplete = true
					}
				}

				if (gridComplete) {
					emptyGrid()
					setWinner('D')
				}
			}

			setPlayer(player === 'one' ? 'two' : 'one')
		}
	}

	const emptyGrid = () => {
		grid = [
			['', '', ''],
			['', '', ''],
			['', '', '']
		]
	}

	const winnerChecker = () => {
		let x = 0
		let o = 0

		//for checking rows
		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				if (grid[row][col] === 'X') x++
				else if (grid[row][col] === 'O') o++

				if (x === 3) return 'X'
				else if (o === 3) return 'O'
			}
			x = 0
			o = 0
		}

		//for checking columns
		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				if (grid[col][row] === 'X') x++
				else if (grid[col][row] === 'O') o++

				if (x === 3) return 'X'
				else if (o === 3) return 'O'
			}
			x = 0
			o = 0
		}

		//for left diagonal
		if (grid[0][0] === 'X' && grid[1][1] === 'X' && grid[2][2] === 'X') {
			return 'X'
		}
		if (grid[0][0] === 'O' && grid[1][1] === 'O' && grid[2][2] === 'O') {
			return 'O'
		}

		//for right diagonal
		if (grid[0][2] === 'X' && grid[1][1] === 'X' && grid[2][0] === 'X') {
			return 'X'
		}
		if (grid[0][2] === 'O' && grid[1][1] === 'O' && grid[2][0] === 'O') {
			return 'O'
		}
	}

	useEffect(() => {
		for (let i = 1; i <= 3; i++) {
			for (let j = 1; j <= 3; j++) {
				document.getElementById(`game${i}${j}`).innerHTML = ''
			}
		}
	}, [restart])

	return (
		<div id='game' className='game'>
			<div id='game11' onClick={insertValue} className='button'></div>
			<div id='game12' onClick={insertValue} className='button'></div>
			<div id='game13' onClick={insertValue} className='button'></div>
			<div id='game21' onClick={insertValue} className='button'></div>
			<div id='game22' onClick={insertValue} className='button'></div>
			<div id='game23' onClick={insertValue} className='button'></div>
			<div id='game31' onClick={insertValue} className='button'></div>
			<div id='game32' onClick={insertValue} className='button'></div>
			<div id='game33' onClick={insertValue} className='button'></div>
		</div>
	)
}

export default GameUI
