const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("?")

bot.on('ready', function() {
	console.log("Connexion réussi à ${client.user.tag}!");
	client.user.setPresence({ game: { name: 'TeraCube | ?help', type: 0 } 
});

bot.login('NDI0ODgzNjQyNzEyNTg4Mjg5.DY_XVQ.rboOpJydYFy7FZNRsA_ZrUWzIFg');

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage(" Liste des commandes: \n?help");
	}
	
	if (message.content === "Salut"){
		message.reply("Hey :D");
		console.log("Commande -Salut effectué !");
});