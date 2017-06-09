import React from 'react'

const AddExpenseForm = props => {
	return (
		<div className="AddExpenseForm">
			<form>
				<label htmlFor="details">Details:</label>
				<input type="text" name="details" />
				<label htmlFor="amount">Amount:</label>
				<input type="text" name="amount" />
			</form>
		</div>
	)
}

export default AddExpenseForm
