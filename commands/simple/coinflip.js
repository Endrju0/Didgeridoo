const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command { //szablon z commando dla klasy

    constructor(client) {
        super(client, { //nadpisanie konstruktora szablonu
            name: 'flip', //wywołanie komendy
            group: 'simple', //nazwa grupy do jakiej należy komenda
            memberName: 'flip', //nazwa do helpa
            description: 'Rzut monetą' //opis
        })
    }

    async run(message) {
        var chance = Math.floor(Math.random() * 2);

        if(chance == 0) {
            message.reply('Orzel');
        } else {
            message.reply('Reszka');
        }
    }
}

module.exports = CoinFlipCommand; //info o tym, że komenda istnieje