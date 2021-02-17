const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async message => {
    //804197707111333918

    lastCheckDate = null;

    setInterval(() => {
    var today = new Date();
    if (today != lastCheckDate && (today.getDate() === 30 || today.getDate() === 31 || today.getDate() === 1)) {
        client.channels.cache.get('804197707111333918').send('<@&803754853457330236> Husk at betale minimum 20kr den 1 på Mobilepay **0229MR** - React hvis du har doneret').then((msg)=>{msg.react('✅')});
    };
    lastCheckDate = today;
  }, 1000*60*60*24);
});

client.login("ODA0MjAxODM2OTc3NTg2MjA2.YBI5Uw.wTbpIEdewHFcOjfW8Igz0rVGbzI");