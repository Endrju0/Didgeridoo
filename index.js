const Commando = require('discord.js-commando'); //const Discord = require('discord.js');
const bot = new Commando.Client(); //new Discord.Client();
const TOKEN = '';

bot.registry.registerGroup('simple', 'Simple'); //grupa komend
bot.registry.registerDefaults(); //informacje o komendach
bot.registry.registerCommandsIn(__dirname + '/commands'); //lokalizacja z komendami

bot.on('message', function(message) { //uruchamia się za każdym razem gdy zostanie wysłana wiadomość
    if(message.content == 'siema') { //plain text
        //message.reply('xxx'); @wzmianka + wiadomość
        message.channel.sendMessage('Hiho ' + message.author + ', co tam? ', {
            tts: true
        });
    }
});

bot.on('ready', function() {
    console.log(new Date().toLocaleString() + ': Ready');
});

bot.login(TOKEN);