const commando = require('discord.js-commando');

class DiceBetCommand extends commando.Command {

    constructor(client) {
        super(client, { 
            name: 'roll',
            group: 'simple', 
            memberName: 'roll',
            description: 'low (1-3) albo high(4-6)',
            args: [ {
                key: 'value',
                prompt: 'Podaj czy chcesz postawić na low (1-3) czy high (4-6).',
                type: 'string',
                validate: value => {
                    if (value.toLowerCase() != 'high' || value.toLowerCase() !=  'low' || value.toLowerCase() !=  'h' || value.toLowerCase() !=  'l' )
                        return true
                    else return 'Podaj wartość high (h) lub low (l)';
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