const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "?"

client.on('ready', () => {
  console.log(`Connexion réussi à ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === '?ip') {
    msg.reply(' ```IP: teracube.mcpe.eu\nPort: 19144```');
  }
  if (msg.content === '?help') {
    msg.reply('Liste des commandes:```\n?info - Affiche les informations du bot\n?ip - Affiche ip et le port du serveur \n?ping - Ne sert à rien x)```');
  }
  if (message.content.StartWish('?info')) {
  	message.delete;
  	message.channel.send("", {
  		embed: {
  			color : 0xE15306,
  			author: {name: message.author.name},
  			description : "",
  			title : "Informations Bot",
  			fields : [
  			{
  				name : 'Nom du bot',
  				value : 'TeraBot',
  				inline : true
  			},{
  			    name : 'Créateur',
  				value : 'Zips  Tuto/Gaming#8306',
  				inline : true
  			},{
  				name : 'Version',
  				value : '1.0.1',
  				inline : true
  			},{
  				name : 'Date de mise à jour',
  				value : '18/03/2018',
  				inline : true
  		}],
  		},
  		  footer: {
  		  	text : 'Message envoyé par TeraBot'
  		  }
  	});
  }


});

client.login('NDI0ODgzNjQyNzEyNTg4Mjg5.DY_XVQ.rboOpJydYFy7FZNRsA_ZrUWzIFg');