const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'sounds',
            memberName: 'leave',
            description: 'Leaves voice channel'
        })
    }

    async run(message) {
        if(message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        } else {
            message.reply('I must be on voice channel to do this.');
        }
    }
}

module.exports = LeaveChannelCommand; 