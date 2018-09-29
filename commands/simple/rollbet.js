const commando = require('discord.js-commando');

class DiceBetCommand extends commando.Command {

    constructor(client) {
        super(client, { 
            name: 'roll',
            group: 'simple', 
            memberName: 'roll',
            description: 'Bet if ',
            args: [ {
                key: 'value',
                prompt: 'Bet if dice will land on low (1-3) or high(4-6)',
                type: 'string',
                validate: value => {
                    if (value.toLowerCase() != 'high' || value.toLowerCase() !=  'low' || value.toLowerCase() !=  'h' || value.toLowerCase() !=  'l' )
                        return true
                    else return 'Please enter a value: high (h) or low (l)';
                }
            } ]
        })
    }

    async run(message, { value }) {
        var chance = Math.floor((Math.random() * 6) + 1);
        value = value.toLowerCase(); 
        
        if(chance <= 3) {
            if(value == 'low' || value == 'l')
                message.reply('Brawo, wygrałeś! Wylosowano liczbę: ' + chance);
            else message.reply('Przegrałeś! Wylosowano liczbę: ' + chance);
        } else {
            if(value == 'high' || value == 'h')
                message.reply('Brawo, wygrałeś! Wylosowano liczbę: ' + chance);
            else message.reply('Przegrałeś! Wylosowano liczbę: ' + chance);
        }
    }
}

module.exports = DiceBetCommand; 