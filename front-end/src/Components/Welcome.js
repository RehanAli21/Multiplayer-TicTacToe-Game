import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
	const [name, setName] = useState('')

	return (
		<div className='welcome'>
			<h1>Welcome to Tic Tac Toe Game</h1>
			<div>
				<input
					type='text'
					onChange={e => setName(e.target.value)}
					placeholder='Enter your name...'
				/>
				<Link
					onClick={e => (!name ? e.preventDefault() : null)}
					to={`/local?name=${name}`}>
					<input type='button' value='Play Local' />
				</Link>
				<Link
					onClick={e => (!name ? e.preventDefault() : null)}
					to={`/friend?name=${name}`}>
					<input type='button' value='Play with friends' />
				</Link>
				<Link
					onClick={e => (!name ? e.preventDefault() : null)}
					to={`/random?name=${name}`}>
					<input type='button' value='Play with random person' />
				</Link>
			</div>
			<p>Created by Rehan Ali</p>
		</div>
	)
}

export default Welcome
