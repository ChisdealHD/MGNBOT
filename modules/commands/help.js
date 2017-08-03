const Discord = require("discord.js");
const os = require('os')

module.exports = (bot) => {
	bot.addTraditionalCommand("help", message => {
		message.delete(1000)
		var commands = bot.getTraditionalCommands()
		var replyMsg = "\`\`\`"
		
		for (var i = 0; i < commands.length; i++) {

            replyMsg += bot.getPrefix() + commands[i].index + "\n"

        }
		
		replyMsg += "\`\`\`"
		
        let embed = new Discord.RichEmbed();
		embed.setTitle("Help Command!")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("you need help! ", replyMsg, true)
		embed.addField("Creater of BOT!: ", "ChisdealHD#4615", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})
    })
}