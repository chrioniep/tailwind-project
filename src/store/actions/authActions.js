import { authTypes } from '../utils/Types';
import axios from 'axios'

const url = "localhost:5000"

// Check token & load user
export const loadUser = () => {
	return (dispatch, getState) => {
		// User loading
		dispatch({type: authTypes.USER_LOADING});

		// GET token from localstorage
		const token = getState().auth.token;

		// Headers
		const config = {
			headers:{
				"Content-type":"application/json"
			}
		}

		// if Token, add to headers
		if(token){
			config.headers['Authorization'] = token;
		}

		axios.get(`${url}/api/user/profile`, config)
			.then(res => dispatch({
				type:authTypes.USER_LOADED,
				payload:res.data
			}))
			.catch(err => {
				dispatch({
					type:authTypes.AUTH_ERROR
				});
			})
	}
}