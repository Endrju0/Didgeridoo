const commando = require('discord.js-commando');

class ShowAvatarCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'sounds',
            memberName: 'avatar',
            description: 'Shows avatar of mentioned user'
        })
    }

    async run(message) {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
        message.reply(user.avatarURL);
    }
}

module.exports = ShowAvatarCommand; 