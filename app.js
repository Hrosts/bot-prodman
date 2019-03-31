const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const COMMAND_PREFIX = settings.COMMAND_PREFIX;
const commandParser = require('./src/service/commandParser.js');

client.on('ready', () => {
	console.log('Connection established.');
});

client.on('message', message => {

	if (message.content.startsWith(COMMAND_PREFIX)) {
		const command = new commandParser(message).parse();
		command.execute();
	}
});

client.login(settings.token);