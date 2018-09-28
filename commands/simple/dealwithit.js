const commando = require('discord.js-commando');

class DealWithItEmojiCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'dwi',
            group: 'simple',
            memberName: 'dwi',
            description: 'Animated emoji: deal with it'
        })
    }

    async run(message) {
        let keyframe = {
            '0': '(•_•)',
            '1': '( •_•)>⌐■-■ ',
            '2': '(⌐■_■)'
        }

        message.channel.send(keyframe[0]).then(msg1 => {
            setTimeout(() => {
                msg1.edit(keyframe[1]).then(msg2 => {
                    setTimeout(() => {
                        msg2.edit(keyframe[2])
                    }, 700)
                })
            }, 700);
        });

    }
}

module.exports = DealWithItEmojiCommand; 