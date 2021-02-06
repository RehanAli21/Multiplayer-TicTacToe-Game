import React from 'react'

const GameUI = ({ player }) => {
	const insertValue = e => {
		if (e.target.innerHTML === '') {
			e.target.innerHTML = `<h1 id='${e.target.id}t'>${
				player === 'one' ? 'X' : 'O'
			}</h1>`
		}
	}

	return (
		<div className='game'>
			<div id='game1' onClick={insertValue} className='button'></div>
			<div id='game2' onClick={insertValue} className='button'></div>
			<div id='game3' onClick={insertValue} className='button'></div>
			<div id='game4' onClick={insertValue} className='button'></div>
			<div id='game5' onClick={insertValue} className='button'></div>
			<div id='game6' onClick={insertValue} className='button'></div>
			<div id='game7' onClick={insertValue} className='button'></div>
			<div id='game8' onClick={insertValue} className='button'></div>
			<div id='game9' onClick={insertValue} className='button'></div>
		</div>
	)
}

export default GameUI
