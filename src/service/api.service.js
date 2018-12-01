/**
 * @fileOverview Service class that provides methods to fetch data from Warframe API
 *
 * @see https://docs.warframestat.us/
 * @author Freiberg Vlad
 */

const HttpUtils = require('../utils/http.utils');
const settings = require('../config/settings.json');
const API_URL = settings.API_URL;

class ApiService {

	static getAlertsData(callback) {
		return this._getGenericData('/pc/alerts', callback);
	}

	static getInvasionData(callback) {
		return this._getGenericData('/pc/invasions', callback);
	}

	static getCurrentCetusStatus(callback) {
		return this._getGenericData('/pc/cetusCycle', callback);
	}

	/**
	 * Performs generic GET request to Warframe API
	 *
	 * @param {string} path
	 * @param {function} callback function that should be called after the response was received
	 * @returns {?Object}
	 * @private
	 */
	static _getGenericData(path, callback) {
		try {
			return HttpUtils.get(API_URL + path, callback);
		} catch (e) {
			return null;
		}
	}

}

module.exports = ApiService;