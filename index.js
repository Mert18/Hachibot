const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./config.json');

client.once('ready', () => {
	console.log('ready');
});

client.login(token);