const { EmbedBuilder } = require("discord.js")

exports.help = {
    name: 'ping'
}

exports.run = async (client, message) => {
    const Embed = new EmbedBuilder()
        .setColor(client.config.clients.embedColor)
        .setTimestamp()
        .setFooter({ text: client.config.clients.name, iconURL: client.config.clients.logo })

 
        message.channel.send({
            embeds: [
                Embed
                .setTitle('**Ping**')
                .setDescription("🏓 Pong")
                .addFields(
                    { name: 'Latence:', value: `${client.ws.ping}ms.` }
                )
            ]
        })
 
}