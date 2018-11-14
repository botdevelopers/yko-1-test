const Discord = require('discord.js');
exports.run = (client, message, args) => {

	const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', ':::: DENEME KOMUT ::::')
    .addField('Kullanıcı:', 'DENEME')
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', ':::: Sebep Yok ::::');
  message.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['denemes'],
  permLevel: 2
};

exports.help = {
  name: 'deneme',
  description: 'Deneme Komutu',
  usage: 'Deneneme Deneme'
};