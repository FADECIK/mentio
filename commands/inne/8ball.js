const MessageEmbed = require('discord.js')

module.exports = {
    name: '8ball',
    description: 'odpowiadaj',
    run: async(client, message) => {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if (!question) return message.reply('Podaj pytanie!');
        else {
            let answers = [
                'Definitywnie tak',
                'Tak',
                'Tak, pewnie', 
                'Chyba tak',
                'Może',
                'Chyba nie',
                'Nie',
                'Definitywnie nie'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('8ball⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
                .setColor(0xcc33ff)
                .setFooter(`${message.author}`)
                .addField('Pytanie: ', question)
                .addField('Odpowiedź: ', response);
            message.channel.send(embed);

        }
    }
};