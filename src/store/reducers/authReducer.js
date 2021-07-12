import { authTypes } from '../utils/Types'

const initState = {

	token:localStorage.getItem('auth'),
	isAuthenticated:null,
	isLoading:false,
	user:null

};


const authReducer = (state=initState, action) => {
	switch(action.type){
		case authTypes.USER_LOADING:
			return {
				...state,
				isLoading:true
			};
		case authTypes.USER_LOADED:
			return {
				...state,
				isAuthenticated:true,
				isLoading:false,
				user:action.payload
			};
		case authTypes.LOGIN_SUCCESS:
		case authTypes.REGISTER_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated:true,
				isLoading:false,
			};
		case authTypes.AUTH_ERROR:
		case authTypes.LOGIN_FAIL:
		case authTypes.LOGOUT_SUCCESS:
		case authTypes.REGISTER_FAIL:
			localStorage.removeItem('token')
			return {
				...state,
				token:null,
				user:null,
				isAuthenticated:false,
				isLoading:false
			}
		default:
			return state

	}
}

export default authReducer;