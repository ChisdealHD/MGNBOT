const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.config.prefix;
const Rcon = require('modern-rcon');
const rcon = new Rcon(config.ark.config.ip, port = config.ark.config.port, config.ark.config.password, timeout = 10000);

module.exports = (bot) => {
	
	rcon.connect();

	function commandIs(str, msg){

		return msg.content.toLowerCase().startsWith(setting.config.prefix + str);

	}

	function pluck(array) {

		return array.map(function(item) { return item["name"]; });

	}

	function hasRole(mem, role) {

		if(pluck(mem.roles).includes(role)){

			return true;

		} else {

			return false;

		}

	}
	
	var args = message.content.split(/[ ]+/);
	
	bot.addTraditionalCommand("arkcmd", message => {
		message.delete(1000)
		if (message.guild.id === "296573682015272961") {
			if (hasRole(message.member, config.ark.config.ownerRole)){

				rcon.send(args.join(" ").substring(7)).then((res) => {

                message.channel.send(res)

				})

			}
			return
		} else {
			message.channel.send("SORRY! you not allowed to do this commands");
		}
        
    })
	
	bot.addTraditionalCommand("arkplayers", message => {
		message.delete(1000)
		if (message.guild.id === "296573682015272961") {
			rcon.send("listplayers").then((res) => {

            message.channel.send(res)

			})
			return
		} else {
			message.channel.send("SORRY! you not allowed to do this commands");
		}
        
    })
	
	bot.addTraditionalCommand("arkchat", message => {
		message.delete(1000)
		if (message.guild.id === "296573682015272961") {
			setInterval (function (){

			rcon.send("GetChat").then((res) => {

            console.log(res)

				if (res.toString() === "Server received, But no response!! \n "){}

					else if (res.indexOf(config.ark.config.serverchatname + ":") > -1) {}

						else{

							message.channel.name = config.ark.config.arkchatchannel

							message.channel.send(res)

						}

					})

				}, 5000); // time between each interval in milliseconds

			}
			return
		} else {
			message.channel.send("SORRY! you not allowed to do this commands");
		}
        
    })
	
	bot.addTraditionalCommand("arkgiveitems", message => {
		message.delete(1000)
		if (message.guild.id === "296573682015272961") {
			if(hasRole(message.member, config.ark.config.ownerRole)){

            if(args.length === 6){

                pid = config.ark.users[args[1]]

                rcon.send("GiveItemToPlayer " + pid + ' "' + config.ark.items[args[2]] + '" ' + args[3] + ' ' + args[4] + " " + args[5]).then((res) => {

                    message.channel.send(res)

                })

                /*getUsers(args[1], message, function(response){

                    rcon.send("GiveItemToPlayer " + response + ' "' + config.ark.items[args[2]] + '" ' + args[3] + ' ' + args[4] + " " + args[5]).then((res) => {

                    console.log(res)

                    })

                })*/

            }else if(args.length <= 5){

                message.channel.send('Not enough arguments, Usage, !arkgiveitems [player] [item] [quantity] [quality] [is bluprint?]')

            }else{

                message.channel.send('Too many arguments, Usage, !arkgiveitems [player] [item] [quantity] [quality] [is bluprint?]')

			}

			}else{

				message.channel.send("You do not have permission to use this command")

			}
			return
		} else {
			message.channel.send("SORRY! you not allowed to do this commands");
		}
        
    })
bot.client.on('message', message => {

    if(message.content.startsWith(config.ark.config.prefix) || message.author.bot)return;

    else if (message.channel.name === config.ark.config.arkchatchannel){

        return rcon.send('Serverchat ' + message.author.username + ': ' + message.content).then((res) => {

            console.log(res)

        })

    }

});

process.on('uncaughtException', function (err) {

	console.error(err);

	console.log("Node NOT Exiting...");

});
}