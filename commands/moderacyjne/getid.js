const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "getid",
    aliases: ["id"],
    run: async(client, message, args) => {
        if (!message.guild.me.hasPermission('KICK_MEMBER')) return message.reply("Nie mam permisi!")
        const Member = message.mentions.members.first()
        const member = message.mentions.members.first()
        const kembed2 = new MessageEmbed()
            .setTitle('Oznacz!⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xFF0000')
            .setDescription('Nie moge wykonać polecenia, ponieważ nie oznaczyłeś której chcesz id!')
            .setTimestamp()
        if (!member) return message.channel.send(kembed2)
        await ({ reason: args.slice(1).join(" ") })
        const bembed = new MessageEmbed()
            .setTitle('**ID**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xcc33ff')
            .addFields({ name: "Moderator:", value: `${message.author}`, inline: false }, { name: "ID:", value: `${Member.user.id}`, inline: false }, )
            .setTimestamp()
        message.channel.send(bembed)
    }
}