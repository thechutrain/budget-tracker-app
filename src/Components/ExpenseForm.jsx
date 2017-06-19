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
			todayMonth: Moment().format('MMMM'),
			todayDate: Moment().format('D')
		}
	}
	handleChange = (propertyName, event) => {
		this.setState({ [propertyName]: event.target.value })
	}
	handleSubmit = e => {
		e.preventDefault() // NECESSARY, or else it'll submit to itself
		// ====== Get all the values from ref! ========
		console.log(this.categoryType.value)
		console.log(this.month.value)
		let monthIndex = monthsArray.indexOf(this.month.value)
		let day = parseInt(this.day.value, 10)
		console.log(day)
		const momentDate = Moment().year(2017).month(monthIndex).date(day)
		// console.log(momentDate)
		// create the new expense & add it to redux
		let newExpense = {
			details: this.state.details,
			amount: parseInt(this.state.amount, 10),
			date: momentDate.unix() * 1000,
			type: this.categoryType.value
		}
		this.props._addExpense(newExpense)
		// reset previous value
		// this.categoryType.value = ''
		this.setState({
			details: '',
			amount: ''
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
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label sm={3}>Date:</Label>
							<Col sm={5}>
								<select
									name="month"
									className="custom-select"
									ref={input => (this.month = input)}
									defaultValue={this.state.todayMonth}
								>
									{monthsArray.map(month => {
										return (
											<option key={month} value={month}>
												{month}
											</option>
										)
									})}
								</select>
							</Col>
							<Col sm={4}>
								<select
									name="day"
									className="custom-select"
									ref={input => (this.day = input)}
									defaultValue={this.state.todayDate}
								>
									{dayArray.map(day => {
										return <option key={day} value={day}>{day}</option>
									})}
								</select>
							</Col>
						</FormGroup>
						<Col sm={12}>
							<button
								type="submit"
								onClick={this.handleSubmit}
								className="btn btn-block btn-primary"
								disabled={this.state.details === '' || this.state.amount === ''}
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

// CONSTANTS
const monthsArray = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]
const dayArray = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'31'
]
