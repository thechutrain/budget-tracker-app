import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

class DisplayCategoryForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			category: '',
			monthlyBudget: 0
		}
	}
	handleChange = (propertyName, event) => {
		event.preventDefault()
		const updatedValue = event.target.value
		this.setState(prevState => {
			return { [propertyName]: updatedValue }
		})
	}
	handleSubmit = e => {
		e.preventDefault()
		// alert('submit')
		// console.log(this.state)
		this.props.addCategory({
			category: this.state.category,
			monthlyBudget: parseInt(this.state.monthlyBudget, 10)
		})
		this.setState(prevState => {
			return { category: '', monthlyBudget: 0 }
		})
	}
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup row>
					<Label sm={3}>Category: </Label>
					<Col sm={9}>
						<Input
							type="text"
							value={this.state.category}
							onChange={this.handleChange.bind(this, 'category')}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={3}>Monthly Budget: </Label>
					<Col sm={9}>
						<Input
							type="number"
							value={this.state.monthlyBudget}
							onChange={this.handleChange.bind(this, 'monthlyBudget')}
						/>
					</Col>
				</FormGroup>
				<Col sm={12}>
					<button
						type="submit"
						onClick={this.handleSubmit}
						disabled={this.state.category === ''}
						className="btn btn-block btn-info"
					>
						Add Category
					</button>
				</Col>
			</Form>
		)
	}
}

export default DisplayCategoryForm
