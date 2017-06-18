/*
* action types
*/
export const SET_USERNAME = 'SET_USERNAME'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const UPDATE_CATEGORY_BUDGET = 'UPDATE_CATEGORY_BUDGET'
export const UPDATE_TOTAL_BUDGET = 'UPDATE_TOTAL_BUDGET'

/*
* action creators
*/
export function setUsername(userName) {
	return {
		type: SET_USERNAME,
		payload: userName
	}
}

function updateTotalBudget() {
	return { type: UPDATE_TOTAL_BUDGET }
}

export function addCategory(catObj) {
	// return {
	// 	type: ADD_CATEGORY,
	// 	payload: catObj // { category: string, monthlyBudge: number }
	// }
	return (dispatch, getState) => {
		dispatch({
			type: ADD_CATEGORY,
			payload: catObj // { category: string, monthlyBudge: number }
		})
		dispatch(updateTotalBudget())
	}
}

export function removeCategory(categoryName) {
	return function(dispatch, getState) {
		dispatch({
			type: REMOVE_CATEGORY,
			payload: categoryName
		})
		dispatch(updateTotalBudget())
	}
}

export function updateCategoryBudget(catObj) {
	return function(dispatch, getState) {
		dispatch({
			type: UPDATE_CATEGORY_BUDGET,
			payload: catObj // { cateogry: string, monthlyBudget: number}
		})
		dispatch(updateTotalBudget())
	}
}
