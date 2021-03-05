const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "kick",
    aliases: ["k"],
    run: async(client, message, args) => {
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Nie masz permisji");
        if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("Nie mam permisji");
        const Member = message.mentions.members.first()
        const member = message.mentions.members.first()
        const kembed2 = new MessageEmbed()
            .setTitle('Oznacz!⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xFF0000')
            .setDescription('Nie moge wykonać polecenia, ponieważ nie oznaczyłeś osoby którą chcesz wyrzucić!')
            .setTimestamp()
        if (!member) return message.channel.send(kembed2)
        await Member.kick({ reason: args.slice(1).join(" ") })
        const kembed = new MessageEmbed()
            .setTitle('**Wyrzucono!**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xcc33ff')
            .addFields({ name: "Moderator:", value: `${message.author}`, inline: false }, { name: "Wyrzucony:", value: `${Member.user.tag}`, inline: false }, { name: "Powód:", value: `${args.slice(1).join(" ")}`, inline: false }, )
            .setTimestamp()
        message.channel.send(kembed)
        message.author.send(kembed)
    }
}