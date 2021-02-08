import React, { useState } from 'react'

const NewGame = ({ display }) => {
	const [userName, setUserName] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		if (e.target[0].value !== '') setUserName(e.target[0].value)
	}

	return (
		<div style={{ display: display }} className='start'>
			<form
				style={{ display: userName !== '' ? 'none' : 'block' }}
				onSubmit={handleSubmit}>
				<input type='text' placeholder='Enter your name...' />
				<button>Get Key</button>
			</form>
			<div style={{ display: userName !== '' ? 'block' : 'none' }}>
				<h3>Key:</h3>
				<p>
					Copy this key and send it to your friend and ask friend to
					join using this key.
				</p>
				<div className='loading'>
					<h1>Waiting for friend to join...</h1>
				</div>
			</div>
		</div>
	)
}

export default NewGame
