const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    name: "report",
    aliases: ["zglos"],
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('ban_MEMBERS')) return message.reply("Nie mam permisi!")
        const Member = message.mentions.members.first()
        const member = message.mentions.members.first()
        const kembed2 = new MessageEmbed()
            .setTitle('Oznacz!⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xFF0000')
            .setDescription('Nie moge wykonać polecenia, ponieważ nie oznaczyłeś osoby którą chcesz zgłosić!')
            .setTimestamp()
        if(!member) return message.channel.send(kembed2)
        await ({reason: args.slice(1).join(" ")})
        const bembed = new MessageEmbed()
        .setTitle('**Zgłoszono!**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
        .setColor('0xcc33ff')
        .setThumbnail(message.author.displayAvatarURL())
        .addFields(
            {name: "Użytkownik:", value:`${message.author}`, inline: false},
            {name: "Zgłoszony:", value:`${Member.user.tag}`, inline: false},
            {name: "Powód:", value:`${args.slice(1).join(" ")}`, inline: false},    
        )
        .setTimestamp()
        message.channel.send(bembed)
    }
}