import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
	return (
		<div className='welcome'>
			<h1>Welcome to Tic Tac Toe Game</h1>
			<div>
				<Link style={{ textDecoration: 'none' }} to='/local'>
					<input type='button' value='Play Local' />
				</Link>
				<Link style={{ textDecoration: 'none' }} to='/friend'>
					<input type='button' value='Play with friends' />
				</Link>
				<Link style={{ textDecoration: 'none' }} to='/random'>
					<input type='button' value='Play with random person' />
				</Link>
			</div>
			<p>Created by Rehan Ali</p>
		</div>
	)
}

export default Welcome
