/**
 * Created by TortleWortle on 3/31/2017.
 */
// This is an example bot
const TortleBot = require('tortlebot-core')
const Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client({ autoReconnect: true });
const fs = require("fs")
const rb = "```"
const request = require("request");

client.login(config.token)

const bot = new TortleBot(client);

console.log("BOT IS STARTING UP!")


bot.setPrefix(config.prefix)

bot.registerModule(require('./modules/admin/eval'));
bot.registerModule(require('./modules/admin/status'));
bot.registerModule(require('./modules/commands/server'));
bot.registerModule(require('./modules/commands/sub'));
bot.registerModule(require('./modules/commands/ping'));
//bot.registerModule(require('./modules/commands/google'));
bot.registerModule(require('./modules/commands/dmowner'));
bot.registerModule(require('./modules/commands/about'));
bot.registerModule(require('./modules/commands/help'));
//bot.registerModule(require('./modules/commands/ark'));
bot.registerModule(require('./modules/commands/mc'));
bot.registerModule(require('./modules/admin/whoplaying'));
bot.registerModule(require('./modules/admin/shutdown'));


process.on('unhandledRejection', console.error);