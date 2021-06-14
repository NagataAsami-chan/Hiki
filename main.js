const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'h?'

client.once('ready', () => {
    console.log('nung cac dang online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix || message.author.bot)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'welcome'){message.channel.send('Gọi cc')}; 
    if(command == 'botngu'){message.channel.send('Ngu kệ tao ._.')}
    if(command == 'dam'){message.channel.send('Đấm nhau ko')};
    if(command == 'emoji'){message.channel.send(':MeoKhok:')};
    if(command == 'invite'){message.channel.send('invite me: https://discord.com/oauth2/authorize?client_id=847395011912925206&permissions=1074120776&scope=bot')};
    if(command == 'help'){message.channel.send('Các lệnh của tôi : `welcome botngu dam emoji invite help`')};
    if(command == 'hiki'){message.channel.send('<@613299122094735360>')}
});

client.on('ready', () => {
    console.log('Bot is Now Online & Working Fine')
    client.user.setActivity(`hiki la mot thg ngu`, { type: "WATCHING" })
});
client.login(process.env.token);