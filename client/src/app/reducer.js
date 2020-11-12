import loginReducer from '../features/LoginCard/loginSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	login: loginReducer
});

export default rootReducer;
