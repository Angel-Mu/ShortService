import axios from 'axios';
import { TEST_ACTION } from './types';

const API_URL = 'http://localhost:3000/api';

export function testAction() {
	return function(dispatch) {
		axios.get(`/helloworld`)
			.then(response => {
				dispatch({
					type: TEST_ACTION,
					payload: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			})
	}
}
