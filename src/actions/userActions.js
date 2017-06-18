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

// export function addCategory(catObj){
//   return function (dispatch, getState) {
//
//   }
// }
export function addCategory(catObj) {
	return {
		type: ADD_CATEGORY,
		payload: catObj // { category: string, monthlyBudge: number }
	}
}

export function removeCategory(categoryName) {
	return {
		type: REMOVE_CATEGORY,
		payload: categoryName
	}
}

export function updateCategoryBudget(catObj) {
	return {
		type: UPDATE_CATEGORY_BUDGET,
		payload: catObj // { cateogry: string, monthlyBudget: number}
	}
}

export function updateTotalBudget() {
	return { type: UPDATE_TOTAL_BUDGET }
}

// USING THUNK
// export function updateTotalBudget() {
// 	return function(dispatch, getState) {
// 		return dispatch({ type: UPDATE_TOTAL_BUDGET })
// 	}
// }
