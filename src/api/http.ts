/* eslint-disable @typescript-eslint/promise-function-async */
import axios from 'axios';

// import qs from "qs"

/**
 * HTTP service instance for making API requests.
 */
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	// baseURL: 'https://h4tirakp03.execute-api.us-east-2.amazonaws.com',
	timeout: 100000
});

service.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	res => {
		return res;
	},
	error => {
		return Promise.reject(error);
	}
);

/**
 * Sends a GET request to the specified URL with optional query parameters.
 * @param {string} url - The URL to send the GET request to.
 * @param {object} obj - Optional query parameters as an object.
 * @returns {Promise<any>} - A promise that resolves with the response data or rejects with an error.
 */
export const get = function (url: string, obj?: object) {
	return new Promise((resolve, reject) => {
		service
			.get(url, obj)
			.then(res => {
				resolve(res);
			})
			.catch(error => {
				reject(error);
			});
	});
};

/**
 * Sends a POST request to the specified URL with the given parameters.
 * @param {string} url - The URL to send the request to.
 * @param {object} params - The parameters to include in the request.
 * @returns {Promise<any>} - A promise that resolves with the response data or rejects with an error.
 */
export const post = function (url, params) {
	return new Promise((resolve, reject) => {
		service
			.post(url, { ...params })
			.then(res => {
				resolve(res);
			})
			.catch(error => {
				reject(error);
			});
	});
};

// /**
//  * Sends a POST request to the specified URL with the given parameters in form data format.
//  * @param {string} url - The URL to send the request to.
//  * @param {object} params - The parameters to include in the request.
//  * @returns {Promise<any>} - A promise that resolves with the response data or rejects with an error.
//  */
// export const postFromData = function (url, params) {
//     return new Promise((resolve, reject) => {
//         service.post(url, qs.stringify({ ...params }))
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }
