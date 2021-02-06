import React from 'react'

const Welcome = () => {
	return (
		<div className='welcome'>
			<h1>Welcome to Tic Tac Toe Game</h1>
			<div>
				<input type='text' placeholder='Enter your name...' />
				<input type='button' value='Play Local' />
				<input type='button' value='Play with friends' />
				<input type='button' value='Play with random person' />
			</div>
			<p>Created by Rehan Ali</p>
		</div>
	)
}

export default Welcome
