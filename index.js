const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("?")

bot.on('ready', function() {
	console.log("Connexion réussi à ${client.user.tag}!");
	//bot.user.setPresence({ status: 'online', game: { name: 'TeraCube | ?help' } 
});

client.login('NDI1NjM0OTkxODg0NTk5Mjk2.DZKTRw.Ui-ih146Ar0hQa1o0j-bHd9EEO4');

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage(" Liste des commandes: \n?help");
	}
	
	if (message.content === "Salut"){
		message.reply("Hey :D");
		console.log("Commande -Salut effectué !");
	}
});
