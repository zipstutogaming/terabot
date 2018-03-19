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
  if (msg.content === '?info') {
    msg.reply('Informations:```Nom du bot: TeraBot\nCréateur: ZipsTutoGaming#8306\nVersion du bot: 1.0.1\nDate de mise à jour: 18/03/2018```');
  }
  if (msg.content === '?ip') {
    msg.reply(' ```IP: teracube.mcpe.eu\nPort: 19144```');
  }
  if (msg.content === '?help') {
    msg.reply('Liste des commandes:```\n?info - Affiche les informations du bot\n?ip - Affiche ip et le port du serveur \n?ping - Ne sert à rien x)```');
  }
  
});

client.login('');
