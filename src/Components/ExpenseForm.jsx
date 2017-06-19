import React, { Component } from 'react'
import Moment from 'moment'
import {
	Card,
	CardHeader,
	CardBlock,
	Form,
	FormGroup,
	Label,
	Input,
	Col
} from 'reactstrap'

class ExpenseForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			details: '',
			amount: '',
			date: Moment().unix() * 1000
		}
		// console.log(props.categories)
	}
	handleChange = (propertyName, event) => {
		this.setState({ [propertyName]: event.target.value })
	}
	handleSubmit = e => {
		e.preventDefault() // NECESSARY, or else it'll submit to itself
		// store.dispatch(addExpense(this.state))
		console.log(this.categoryType.value)
		let newExpense = Object.assign(
			{},
			{
				details: this.state.details,
				amount: parseInt(this.state.amount, 10),
				date: this.state.date
			},
			{
				type: this.categoryType.value
			}
		)
		this.categoryType.value = ''
		this.props._addExpense(newExpense)
		this.setState({
			details: '',
			amount: '',
			date: Moment().unix() * 1000
		})
	}

	render() {
		return (
			<Card>
				<CardHeader> <h3>Add an Expense: </h3></CardHeader>
				<CardBlock>
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
									type="number"
									name="amount"
									value={this.state.amount}
									onChange={this.handleChange.bind(this, 'amount')}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="type" sm={3}>Type: </Label>
							<Col sm={9}>
								{/* <Input
									type="text"
									name="type"
									value={this.state.type}
									onChange={this.handleChange.bind(this, 'type')}
								/> */}
								{/* <Input type="select">
									{this.props.categories.map((category, index) => {
										// return <p key={index}>{category}</p>
										return (
											<option key={index} value={category}>{category}</option>
										)
									})}

								</Input> */}

								<select
									name="categoryType"
									id=""
									ref={input => (this.categoryType = input)}
									className="custom-select"
								>
									<option value="--"> -- </option>
									{this.props.categories.map((category, index) => {
										return (
											<option key={index} value={category}>{category}</option>
										)
									})}
								</select>

								{/* <select name="" id="">
									{this.props.categories.map(catObj =>
										<option key={catObj.category} value={catObj.category}>
											{catObj.category}
										</option>
									)}
								</select> */}
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

				</CardBlock>
			</Card>
		)
	}
}

export default ExpenseForm
