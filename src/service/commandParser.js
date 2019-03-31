const commandRepository = require('../repository/commandRepository.js');
const settings = require('../../settings.json');
const COMMAND_PREFIX = settings.COMMAND_PREFIX;

class CommandParser {

	constructor(message) {
		this.message = message;
	}

	parse() {
		const messageText = this.message.content.slice(COMMAND_PREFIX.length).trim();
		const args = messageText.split(' ');
		const commandName = args[0];
		console.log('Command received: ' + commandName)
		const commandConstructor = commandRepository[commandName];
		var parsedMessage = {
			message: this.message,
			text: messageText,
			command: commandName,
			args: args
		}
		return new commandConstructor(parsedMessage);
	}
}

module.exports = CommandParser;