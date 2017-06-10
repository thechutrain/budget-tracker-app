/*
* action types
*/
export const SET_USERNAME = 'SET_USERNAME'
export const ADD_CATEGORY = 'ADD_CATEGORY'
// export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
// export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

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
		payload: catObj
	}
}