const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const os = require('os')

module.exports = (bot) => {
	bot.addTraditionalCommand("about", message => {
		message.delete(1000)
		let embed = new Discord.RichEmbed();
		embed.setTitle("About")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("Bot Name: ", bot.client.user.username, true)
		embed.addField("Bot ID: ", bot.client.user.id, true)
		embed.addField("Servers: ", bot.client.guilds.size, true)
		embed.addField("OS: ", process.platform, true)
		embed.addField("Version: ", process.arch, true)
		embed.addField("Running on: ", process.release.name + ' version ' + process.version.slice(1), true)
		embed.addField("Used Memory: ", Math.ceil(process.memoryUsage().heapTotal / 1000000) + ' MB', true)
		embed.addField("DiscordJS: ", Discord.version, true)
		embed.addField("Module: ", "TortleBot Core https://github.com/TortleWortle/TortleBot-Core", true)
		embed.addField("Creater of BOT!: ", "ChisdealHD#4615", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})        
    })
}