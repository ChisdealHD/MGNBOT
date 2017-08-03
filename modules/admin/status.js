const request = require('request')
const Discord = require("discord.js");
const config = require('../../config.json');
const token = config.authorization;

module.exports = (bot) => {
    bot.client.on('ready', () => {
        bot.client.user.setGame("Do mgn/help for commands | Bot created by ChisdealHD","http://twitch.tv/mgnnetwork")
    });
}