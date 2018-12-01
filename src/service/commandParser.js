const commandRepository = require('../repository/commandRepository.js');

class CommandParser {

	constructor(command) {
		this.command = command;
	}

	parse() {
		const args = this.command.split(' ').filter((str) => str != ' ');
		const commandName = args[0];
		let command = commandRepository[commandName];
		return command && typeof command == 'function' ? command(args) : null;
	}
}

module.exports = CommandParser;