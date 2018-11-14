const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var kullanici = args.slice(0).join(' ');
	var guildID = "511881353025814528";
	var channelID = "512216848654270474";
	

	if (!kullanici){
		return message.reply("Bir Kullanıcı Belirt! Doğru kullanım: **y!ekip-ekle <@User>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "YKO - Ekibine Kullanıcı Alma")
			.addField("Kullanıcı:", kullanici)
			.addField("Yetkili:", message.author.tag)
			.addField("ID", message.author.id)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send(":outbox_tray: Kullanıcı Ekipten Alındı! :outbox_tray:");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ekip-ekle"], 
  permLevel: 4 
};

exports.help = {
  name: 'ekip-ekle', 
  description: "YKO - Ekibine Kullanıcı Ekler.", 
  usage: 'ekip-eklecikart <@User>' 
};