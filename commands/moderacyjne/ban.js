const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ban",
    aliases: ["k"],
    run: async(client, message, args) => {
        if (!message.member.permissions.has("ban_MEMBERS")) return message.reply("Nie masz permisji");
        if (!message.guild.me.permissions.has("ban_MEMBERS")) return message.reply("Nie mam permisji");
        const Member = message.mentions.members.first()
        const member = message.mentions.members.first()
        const kembed2 = new MessageEmbed()
            .setTitle('Oznacz!⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xFF0000')
            .setDescription('Nie moge wykonać polecenia, ponieważ nie oznaczyłeś osoby którą chcesz zbanować!')
            .setTimestamp()
        if (!member) return message.channel.send(kembed2)
        await Member.ban({ reason: args.slice(1).join(" ") })
        const kembed = new MessageEmbed()
            .setTitle('**Zbanowano!**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀')
            .setColor('0xcc33ff')
            .addFields({ name: "Moderator:", value: `${message.author}`, inline: false }, { name: "Zbanowany:", value: `${Member.user.tag}`, inline: false }, { name: "Powód:", value: `${args.slice(1).join(" ")}`, inline: false }, )
            .setTimestamp()
        message.channel.send(kembed)
        message.author.send(kembed)
    }
}