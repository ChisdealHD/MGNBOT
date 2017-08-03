const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
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

	function updateGame(){
		if (isCommander(message.author.id)) {
                try {
					
					let mess = message.content.split(" ").splice(1).join(" ")
					if(mess == "" || mess == null) return message.channel.send("Do " +config.prefix+ "whoplaying <game?> for List users Playing!");
						var user = message.author.username;
						var num = message.guild.members.filter(u => u.user.presence.game && u.user.presence.game.name == mess).size;
						var names = message.guild.members.filter(u => u.user.presence.game && u.user.presence.game.name == mess).map(u => u.user.username);
						let embed = new Discord.RichEmbed();
						embed.setTitle("Searching for Users Playing: "+ mess)
						embed.setColor(0x9900FF)
						embed.setThumbnail(bot.client.user.avatarURL)
						embed.addField("command been Run by: ", user, true)
						embed.addField("How many Users playing game: ", num, true)
						embed.addField("List Users: ", names, true)
						embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
						embed.setTimestamp()
						message.channel.send({embed})
                } catch (err) {
					let mess = message.content.split(" ").splice(1).join(" ")
                    message.channel.send("```" + mess + " Not Listed, Please dont Break ME! </3. Make sure right name of GAME!" +"```")
                }
            } else {
			message.channel.send("Sorry, you do not have permissisons to use this command, **" + message.author.username + "**.")
		}
	}
	
	bot.addTraditionalCommand("whoplaying", message => {
		message.delete(1000)
                try {
					
					let mess = message.content.split(" ").splice(1).join(" ")
					if(mess == "" || mess == null) return message.channel.send("Do " +config.prefix+ "whoplaying <game?> for List users Playing!");
						var user = message.author.username;
						var num = message.guild.members.filter(u => u.user.presence.game && u.user.presence.game.name == mess).size;
						var names = message.guild.members.filter(u => u.user.presence.game && u.user.presence.game.name == mess).map(u => u.user.username);
						let embed = new Discord.RichEmbed();
						embed.setTitle("Searching for Users Playing: "+ mess)
						embed.setColor(0x9900FF)
						embed.setThumbnail(bot.client.user.avatarURL)
						embed.addField("command been Run by: ", user, true)
						embed.addField("How many Users playing game: ", num, true)
						embed.addField("List Users: ", names, true)
						embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
						embed.setTimestamp()
						message.channel.send({embed})
                } catch (err) {
					let mess = message.content.split(" ").splice(1).join(" ")
                    message.channel.send("```" + mess + " Not Listed, Please dont Break ME! </3. Make sure right name of GAME!" +"```")
				}
	});
}