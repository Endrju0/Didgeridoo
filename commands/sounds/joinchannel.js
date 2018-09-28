const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'join',
            group: 'sounds',
            memberName: 'join',
            description: 'Joins voice channel'
        })
    }

    async run(message) {
        if(message.member.voiceChannel) { //check if person who calls this command is in voice channel
            if(!message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply('Join channel succeded.');
                    })
            }
        } else {
            message.reply('You must be on voice channel to do this.');
        }
    }
}

module.exports = JoinChannelCommand; 