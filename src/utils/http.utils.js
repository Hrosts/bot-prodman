const request = require('request');

class HttpUtils {

	/**
	 * Performs GET request to remote API
	 *
	 * @static
	 * @param url
	 * @param callback function that should be called after the response received
	 * @return {request}
	 */
	static get(url, callback) {
		if (!url || typeof callback != 'function') {
			throw new Error();
		}
		const options = {
			method: 'GET',
			json: true
		};
		return request(url, options, callback);
	}

}

module.exports = HttpUtils;