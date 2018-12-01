const ApiService = require('../../src/service/api.service');
const assert = require('assert');
const nock = require('nock');
const settings = require('../../src/config/settings.json');

const API_URL = settings.API_URL;

describe('API Service test', () => {

	beforeEach(() => {
		nock(API_URL)
			.get('/pc/alerts')
			.reply(200, {'alerts': '123'});
		nock(API_URL)
			.get('/pc/invasions')
			.reply(200, {'invasions': '123'});
		nock(API_URL)
			.get('/pc/cetusCycle')
			.reply(200, {'cetus': '123'});
	});

	describe('#getAlertsData()', () => {
		it('should not fail', () => {
			ApiService.getAlertsData((error, response, body) => {
				assert.ok(body.alerts === '123');
			});
		});
	});

	describe('#getInvasionData()', () => {
		it('should not fail', () => {
			ApiService.getInvasionData((error, response, body) => {
				assert.ok(body.invasions === '123');
			});
		});
	});

	describe('#getCurrentCetusStatus()', () => {
		it('should not fail', () => {
			ApiService.getCurrentCetusStatus((error, response, body) => {
				assert.ok(body.cetus === '123');
			});
		});
	});

});