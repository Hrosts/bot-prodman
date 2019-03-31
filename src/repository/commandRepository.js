const alerts = require('./commands/alertsCommand');
const invasions = require('./commands/invasionsCommand');
const cetus = require('./commands/cetusCommand');
const triforce = require('./commands/triforceCommand')

const repository = {
	'alerts': alerts,
	'invasions': invasions,
	'cetus': cetus,
	'triforce': triforce
};

module.exports = repository;