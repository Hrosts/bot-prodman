const Discord = require('discord.js')
const client = new Discord.Client()
const settings = require('./settings.json')

client.on('ready', () => {
    console.log('Connection established.')
})

client.on('message', message => {
 
    if (message.content.startsWith('~eval '))
    {
        try 
        {
            message.channel.sendMessage(eval(message.content.slice(6)))
        }
        catch (e)
        {
            message.channel.sendMessage(e)
        }
    }
})

client.login(settings.token)