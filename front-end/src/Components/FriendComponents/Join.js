import React from 'react'

const Join = ({ display }) => {
	return (
		<div style={{ display: display }} className='join'>
			<h1>Join Game with key</h1>
			<input type='text' placeholder='Enter your name...' />
			<input type='text' placeholder='Enter the key...' />
			<button>Join</button>
		</div>
	)
}

export default Join
