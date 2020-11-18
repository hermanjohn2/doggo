const initialState = {
	user: {
		id: '',
		firstName: '',
		lastName: '',
		dogs: []
	}
};

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case 'login/setUser': {
			return {
				...state,
				user: action.payload
			};
		}

		default:
			return state;
	}
}
