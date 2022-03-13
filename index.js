require("http").createServer((req, res) => res.end(process.version)).listen()

const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

//process.env.DISCORD_TOKEN
client.login(process.env.TOKEN);