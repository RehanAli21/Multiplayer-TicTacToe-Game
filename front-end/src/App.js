import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Local from './Components/Local'
import Friend from './Components/Friend'
import Random from './Components/Random'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path={'/'} exact component={Welcome} />
				<Route path={'/local'} component={Local} />
				<Route path={'/friend'} component={Friend} />
				<Route path={'/random'} component={Random} />
			</Switch>
		</Router>
	)
}

export default App
