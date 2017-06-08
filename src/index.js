import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
)

// ===== Testing ============
store.dispatch({ type: 'ADD_EXPENSE' })
