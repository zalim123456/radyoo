 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`DARKNIGHT-BOT | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[Discord](https://discord.gg/kpWnp6**')
.setThumbnail(client.user.avatarURL)
      .addField('**💥Komutlar:**', '`/radyo <sayı>: radyoyu kullanmıza yarar`, `/radyo kapat: radyoyu kapatmanıza yarar`, `/yardım Bilgi`')/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım-b',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};