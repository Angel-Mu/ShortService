import axios from 'axios';
import { POST_SHORTEN } from './types';

// const API_URL = 'http://localhost:3000/api';

export function postShorten(original) {
	return function(cb) {
		console.log(original)
		axios.post('/api/shorten', {
				original: original
			})
			.then(response => {
				cb({type: POST_SHORTEN, payload: response.data});
			})
			.catch((error) => {
				console.log(error);
				cb({error:error});
			})
	}
}
