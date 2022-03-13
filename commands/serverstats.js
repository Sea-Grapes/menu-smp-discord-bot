const util = require("minecraft-server-util");


module.exports = {
  name: "stats",
  description: "get current Menu SMP server stats",
  execute(client, message, args, Discord) {
    util.status("menusmp.my.pebble.host", {port: 25565}).then((response) => {
      console.log(response);
      const embed = new Discord.MessageEmbed()
      .setColor("#0073ff")
	    .setURL("http://menusmp.my.pebble.host/")
      .setTitle("Menu SMP server status")
      .addFields(
        {name: "server IP:", value: response.host.toString()},
        {name: "Current Players:", value: `${response.onlinePlayers.toString()} / ${response.maxPlayers.toString()}`},
        {name: "Player List:", value: getParsedPlayerList(response.samplePlayers)},
        {name: "Version:", value: response.version.toString()}
      )
	    .setTimestamp()
      .setFooter("Menu SMP", "https://cdn.discordapp.com/attachments/809544433400807447/896827765062504529/finished_logo_300_px.png");

      message.channel.send({ embeds: [embed] });
    })
    .catch ((error) => {
      if(error.toString().includes("ECONNREFUSED")) {
        message.channel.send('The Menu SMP servers are currently offline. Please try again later.');
      }
      else {
        message.channel.send('there was an error fetching server stats.');
      }
    })
  }
}


let playerList = "";
function getParsedPlayerList(res) {
  playerList = "";
  try {
    if(typeof res == null || res == null) return "No players";
    else {
      res.forEach((e) => {
        playerList+= `${e["name"]}, `;
      });
      playerList = playerList.slice(0, -2).toString();
      playerList = playerList.replaceAll('_', '\\_');
      return playerList;
    }
  }
  catch(err) {
    console.log(err);
    return "error";
  }
}