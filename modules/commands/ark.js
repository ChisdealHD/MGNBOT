const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const request = require("Request");

module.exports = (bot) => {
	bot.addTraditionalCommand("arkstats", message => {
		message.delete(1000)
		var suffix = message.content.split(" ").slice(1).join(" ");
		let embed = new Discord.RichEmbed();
        if(suffix == "" || suffix == null) return message.channel.sendMessage("Do " + prefix + "arkstats <IP:PORT> for Checking Server is Online for Ark Survival Evolved!");
			request("http://arkservers.net/api/query/"+suffix,
			function(err,res,body){
              var data = JSON.parse(body);
				if(data.info){
					embed.setTitle("Ark Server Status")
					embed.setColor(0x00FF00)
					embed.setTimestamp()
					embed.addField("IP: ", suffix, true)
					embed.addField("Name: ", data.info.HostName, true)
					embed.addField("Online Players: ", data.info.Players, true)
					embed.addField("Max Players: ", data.info.MaxPlayers, true)
					embed.addField("Map: ", data.info.Map, true)
					embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)

					message.channel.send({embed})
				}else{
						embed.setTitle("Ark Server Status")
						embed.setColor(0xFF0000)
						embed.setTimestamp()
						embed.addField("Is OFFLINE! ", true)
						embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)

						message.channel.send({embed})
			  }
		})
        
    })
}