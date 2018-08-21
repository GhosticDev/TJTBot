const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (message.author.id === '197340056053219329') {
    if (args.length === 0) {
      message.channel.send(`<@${message.author.id}> Use: \`${client.prefix}eval <things>\``);
    } else {
      try {
        let msg = message.content.slice(7, message.content.length).trim();
        let m = await eval((msg));
        let emb = new Discord.RichEmbed()
          .setAuthor("Evaluate")
          .setColor([54, 57, 64])
          .setDescription("Eval by **" + message.author.username + "**:" + `\n\`\`\`js\n${m}\`\`\`` + "\n<:download:472416257694760960>Message sent:" + `\n\`\`\`js\n${msg}\`\`\``)
          .setTimestamp();
        message.channel.send(emb);
      } catch (e) {
        let embed = new Discord.RichEmbed()
          .setColor([54, 57, 64])
          .setAuthor("Error")
          .setDescription(`${e}`)
          .setTimestamp();
        message.channel.send(embed);
      }
    }
  } else {
    message.channel.send("Only my owner can use this!");
  }
}
