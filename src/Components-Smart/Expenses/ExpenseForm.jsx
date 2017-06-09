import React, { Component } from 'react'

class ExpenseForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			details: '',
			amount: null,
			type: null,
			date: null
		}
	}
	handleChange = (propertyName, event) => {
		this.setState({ [propertyName]: event.target.value })
	}
	handleSubmit = () => {}
	render() {
		return (
			<form>
				<label htmlFor="details">Details:</label>
				<input
					type="text"
					name="details"
					value={this.state.details}
					onChange={this.handleChange.bind(this, 'details')}
				/>
				<label htmlFor="amount">Amount:</label>
				<input type="text" name="amount" />
			</form>
		)
	}
}

export default ExpenseForm
