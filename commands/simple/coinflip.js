const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command { //template for class from commando

    constructor(client) {
        super(client, {
            name: 'flip', //command
            group: 'simple', //group name to which this command belongs to
            memberName: 'flip', //name in !help
            description: 'Coin flip' //description
        })
    }

    async run(message) {
        var chance = Math.floor(Math.random() * 2);

        if(chance == 0) {
            message.reply('Heads');
        } else {
            message.reply('Tails');
        }
    }
}

module.exports = CoinFlipCommand; //export information about this command