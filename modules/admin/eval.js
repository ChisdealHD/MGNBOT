const request = require('request')
const Discord = require("discord.js");
const config = require('../../config.json');
const admins = config.admins;
const os = require('os');

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

	bot.addTraditionalCommand('eval', message => {
		message.delete(1000)
		var user = message.author.username;
		let embed = new Discord.RichEmbed();
	if (isCommander(message.author.id)) {
                try {
                    let code = message.content.split(" ").splice(1).join(" ")
                    let result = eval(code)
					embed.setTitle("Execute Command")
					embed.setColor(0x008000)
					embed.addField("Run command: ", "```"+user+"```", true)
					embed.addField("Input: ", "```" + code + "```", true)
					embed.addField("Output: ", "```diff\n+ " + result + "```", true)
					embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
					embed.setTimestamp()
					message.channel.send({embed})
                } catch (err) {
                    message.channel.send("```diff\n- " + err + "```")
                }
            } else {
			message.channel.send("Sorry, you do not have permissisons to use this command, **" + message.author.username + "**.")
		}
	});
}