const Discord = require('discord.js')
const wersiajs = require('../../config.json').discordjs
const autor = ('@Fade#2014')
module.exports = {
    name: "botinfo",
    run : async(client, message, args) => {
        const biembed = new Discord.MessageEmbed()
            .setTitle('**INFORMACJE O BOCIE**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xcc33ff')
            .addFields(
                {name: 'Wersia djs:', value: `${wersiajs}`},
                {name: 'Autor:', value:`${autor}`},
                {name: 'Ram:', value: `${(~~(Math.round(process.memoryUsage().heapUsed.toFixed(2) / 1024 / 1024)))}mb/ 3853mb`}
            )
        message.channel.send(biembed)
    }
}