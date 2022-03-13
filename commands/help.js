module.exports = {
  name: "help",
  description: "get Menu SMP commands",
  execute(client, message, args, Discord) {
    const embed = new Discord.MessageEmbed()
    .setColor("#0073ff")
    .setURL("http://menusmp.my.pebble.host/")
    .setTitle("Menu SMP bot help")
    .setDescription("This is a list of commands for the Menu SMP discord bot.")
    .addFields(
      {name: "m.help:", value: "lists the bot's commands"},//msmp.
      {name: "m.stats:", value: "lists the server's current status"}//msmp.
    )
    .setTimestamp()
    .setFooter("Menu SMP", "https://cdn.discordapp.com/attachments/809544433400807447/896827765062504529/finished_logo_300_px.png");

    message.channel.send({ embeds: [embed] });
  }
}