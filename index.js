const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
	console.log("Bot on with " + client.users.size + " users and " + client.guilds.size + " servers!");
	client.user.setActivity(`${client.users.size} users!`, {type: 'Watching'});
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
	if (message.author.bot) return undefined;
  let user = message.author;

	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

  try {
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    console.log(e);
  } finally {
  }

});

client.on('guildMemberAdd', async member => {
  if (member.guild.id === '481591024481861634') {
    client.channels.get('481600467009273857').edit({
      name: `Members: ${member.guild.members.size}`
    }).then(console.log).catch(console.error);
  }
});

client.on('guildMemberRemove', async member => {
  if (member.guild.id === '481591024481861634') {
    client.channels.get('481600467009273857').edit({
      name: `Members: ${member.guild.members.size}`
    }).then(console.log).catch(console.error);
  }
});

client.login(process.env.TOKEN);
