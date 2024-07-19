// ***** start - imports from package *****
import { combineReducers } from '@reduxjs/toolkit'
// ***** end - imports from package *****

// ***** start - imports from files *****
import cartReducer from './cartReducer'
// ***** end - imports from files *****

// ***** start - Make comnination of reducer *****
const rootReducer = combineReducers({
	cart: cartReducer,
})
// ***** end - Make comnination of reducer *****

export default rootReducer