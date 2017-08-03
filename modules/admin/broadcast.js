const request = require('request')
const Discord = require("discord.js");
const config = require('../../config.json');
const admins = config.admins;

module.exports = (bot) => {

function isCommander(id) {
	if(id === config.owner_id) {
		return true;
	}
	for(var i = 0; i < admins.length; i++){
		if(admins[i] == id) {
			return true;
		}
	}
	return false;
}

	bot.addTraditionalCommand('broadcast', message => {
	message.delete(1000)
		if (isCommander(message.author.id)) {
			bot.client.guilds.forEach(m => {
				var mess = message.content.split(" ").slice(1).join(" ");
				let embed = new Discord.RichEmbed();
				var user = message.author.username;
				var id = message.author.id;
				embed.setTitle("Announced!")
				embed.setColor(0x9900FF)
				embed.setThumbnail(bot.client.user.avatarURL)
				embed.addField("Owner: ", user, true)
				embed.addField("OwnerID: ", id, true)
				embed.addField("Message: ", mess, true)
				embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
				embed.setTimestamp()
				m.defaultChannel.send({embed})
			});
		}else {
			message.channel.send("You are not a Owner of this bot! Access DENIED!")
		}
	})
}