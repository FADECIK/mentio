const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "linki",
    aliases: ["link, linczaki"],
    run : async(client, message, args) => {
        const lembed = new Discord.MessageEmbed()
            .setTitle('**Linki**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xcc33ff')
            .addFields(
                {name: "Facebook:", value:"tu bedzie link", inlines: true},
                {name: "Support serwer Discord:", value:"tu bedzie link", inlines: true},
                {name: "Strona internetowa:", value:"tu bedzie link", inlines: true}
            )
        message.channel.send(lembed)
        }
}