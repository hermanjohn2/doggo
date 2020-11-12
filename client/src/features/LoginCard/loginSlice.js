const initialState = {
	userId: '',
	firstName: '',
	lastName: '',
	email: '',
	dogs: []
};

export default function filtersReducer(state = initialState, action) {
	switch (action.type) {
		case 'login/setId': {
			return {
				// Again, one less level of nesting to copy
				...state,
				userId: action.payload
			};
		}
		case 'login/setUser': {
			return [
				...state,
				{
					firstName: action.payload.first,
					lastName: action.payload.last,
					email: action.payload.email,
					dogs: action.payload.dogs
				}
			];
		}

		default:
			return state;
	}
}
