module.exports = member => {
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:outbox_tray: Sunucudan Çıktı: **${member}** :outbox_tray:`);
};
