const Discord = require('discord.js');

exports.run = (client, message, args) => {
	message.channel.sendMessage('https://philipyip.files.wordpress.com/2017/04/startupissue2.gif')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['win10', 'windows10'],
  permLevel: 0
};

exports.help = {
  name: 'win10',
  description: 'Win10 Efekti',
  usage: 'win10'
};
