import { SET_USERNAME, ADD_CATEGORY } from '../actions/userActions'
// ========SAMPLE userSettings structure====
// userSettings: {
//   name: 'Alan',
//   categories: [
//     { type: 'Grocery', monthlyBudget: 125.75},
//     { type: 'Dinning', monthlyBudget: 120}
//   ],

// }

// =========== helper reducers =========
function addCategoryReducer(state, action) {
	const categories = state.categories.slice()
	categories.push(action.payload)
	return Object.assign({}, state, { categories })
}

// ======= Actual Reducer ============
const defaultUserSettings = {
	name: '',
	categories: [],
	monthlyBudget: null
}
function userReducer(state = defaultUserSettings, action) {
	// switch statement on action.type
	switch (action.type) {
		case SET_USERNAME:
			return Object.assign({}, state, { name: action.payload })
		case ADD_CATEGORY:
			return addCategoryReducer(state, action)
		default:
			return state
	}
}

export default userReducer
