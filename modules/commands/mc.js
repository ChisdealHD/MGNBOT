const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const request = require("Request");

module.exports = (bot) => {
	bot.addTraditionalCommand("mcstats", message => {
		message.delete(1000)
		var suffix = message.content.split(" ").slice(1).join(" ");
		let embed = new Discord.RichEmbed();
        if(suffix == "" || suffix == null) return message.channel.sendMessage("Do " + prefix + "mcstats <IP:PORT> for Checking Server is Online for Minecraft!");
			request("https://eu.mc-api.net/v3/server/info/"+suffix+"/json",
			function(err,res,body){
              var data = JSON.parse(body);
              if(data.online){
					embed.setTitle("Minecraft Server Status")
					embed.setColor(0x00FF00)
					embed.setThumbnail(data.favicon)
					embed.setTimestamp()
					embed.addField("IP: ", suffix, true)
					embed.addField("Online Players: ", data.players.online, true)
					embed.addField("Max Players: ", data.players.max, true)
					embed.addField("Online: ", data.online, true)
					embed.addField("Version: ", data.version.name, true)
					embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)

					message.channel.send({embed})
              }else{
					embed.setTitle("Minecraft Server Status")
					embed.setColor(0xFF0000)
					embed.setThumbnail(data.favicon)
					embed.setTimestamp()
					embed.addField("Is OFFLINE! ", true)
					embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)

					message.channel.send({embed})
			  }
        })
        
    })
}