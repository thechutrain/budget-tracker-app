import React, { Component } from 'react'
import Moment from 'moment'
// Redux actions
import { addExpense } from '../actions/expenseActions'
import store from '../store.js'

class ExpenseForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			details: '',
			amount: '',
			type: '',
			date: Moment().unix() * 1000
		}
	}
	handleChange = (propertyName, event) => {
		this.setState({ [propertyName]: event.target.value })
	}
	handleSubmit = e => {
		e.preventDefault() // NECESSARY, or else it'll submit to itself
		store.dispatch(addExpense(this.state))
		this.setState({
			details: '',
			amount: '',
			type: '',
			date: ''
		})
	}

	render() {
		return (
			<form className="ExpenseForm">
				<label htmlFor="details">Details:</label>
				<input
					type="text"
					name="details"
					value={this.state.details}
					onChange={this.handleChange.bind(this, 'details')}
				/>
				<label htmlFor="amount">Amount:</label>
				<input
					type="text"
					name="amount"
					value={this.state.amount}
					onChange={this.handleChange.bind(this, 'amount')}
				/>
				<label htmlFor="type">Type:</label>
				<input
					type="text"
					name="type"
					value={this.state.type}
					onChange={this.handleChange.bind(this, 'type')}
				/>
				<button type="submit" onClick={this.handleSubmit}> Submit </button>
			</form>
		)
	}
}

export default ExpenseForm
