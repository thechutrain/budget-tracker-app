import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
// ==== other components ======
import Expenses from '../Container/Expenses/Expenses.jsx'
import UserSettings from '../Container/UserSettings/UserSettings.jsx'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<h2>Welcome to Budge Tracker</h2>
				</div>
				<UserSettings />
				<Expenses />
			</div>
		)
	}
}

export default App
