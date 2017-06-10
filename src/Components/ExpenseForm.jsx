import React, { Component } from 'react'
import Moment from 'moment'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap'
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
			date: Moment().unix() * 1000
		})
	}

	render() {
		return (
			<Form>
				<FormGroup row>
					<Label htmlFor="details" sm={3}>Details:</Label>
					<Col sm={9}>
						<Input
							type="text"
							name="details"
							value={this.state.details}
							onChange={this.handleChange.bind(this, 'details')}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="amount" sm={3}> Amount: </Label>
					<Col sm={9}>
						<Input
							type="text"
							name="amount"
							value={this.state.amount}
							onChange={this.handleChange.bind(this, 'amount')}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="type" sm={3}>Type: </Label>
					<Col sm={9}>
						<Input
							type="text"
							name="type"
							value={this.state.type}
							onChange={this.handleChange.bind(this, 'type')}
						/>
					</Col>
				</FormGroup>
				<Col sm={12}>
					<button
						type="submit"
						onClick={this.handleSubmit}
						className="btn btn-block btn-primary"
					>
						Submit
					</button>
				</Col>
				{/* <Button onClick={this.handleSubmit}>Submit</Button> */}
			</Form>
		)
	}
}

export default ExpenseForm
