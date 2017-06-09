import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'reactstrap'
// ==== other components ======
import Expenses from '../Container/Expenses/Expenses.jsx'

class App extends Component {
	render() {
		return (
			<Container>
				<div className="App">
					<div className="App-header">
						{/* <img src={logo} className="App-logo" alt="logo" /> */}
						<h2>Welcome to Budge Tracker</h2>
					</div>
					<Expenses />
				</div>
			</Container>
		)
	}
}

export default App
