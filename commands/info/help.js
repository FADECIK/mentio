const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const nazwabota = require("../../config.json").nazwabota;
module.exports = {
    name: "help",
    aliases: ['h', 'pomoc'],
    description: "Shows all available bot commands.",
    run: async(client, message, args) => {
        const hembed = new MessageEmbed()
            .setTitle(`**POMOC | ${nazwabota}** Mój prefix to "${prefix}".⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
            .setColor('0xcc33ff')
            .addFields({ name: "Moderacyjne", value: "`ban, kick, clear, getid`", inline: false }, { name: "Informacyjne", value: "`help, ping`", inline: false }, { name: "Inne", value: "`botinfo, czesc, linki, report, zdjecie`", inline: false }, )
        message.channel.send(hembed)
    }
}