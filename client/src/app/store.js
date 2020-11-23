import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/LoginCard/loginSlice';

export default configureStore({
	reducer: {
		loggedIn: loginReducer
	}
});
