module.exports = async (client, message) => {
  // This event runs every time a message is received by the bot

  // Ignores messages from bot users
  if (message.author.bot) return;

  // Ignores messages that don't start with the prefix
  if (!message.content.startsWith(client.config.settings.prefix)) return;

  // Split message into args
  const args = message.content.slice(client.config.settings.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();


  // Get the command from the commands list and assign it to the command var
  const command = client.commands.get(cmd);

  if (!command) {
    message.channel.send('That command doesn\'t exist!');
    return;
  }


  if(!command.level(message)) {
    message.channel.send({
      embed: {
        color: 15158332,
        title: 'Permissions Error',
        description: 'You do not have the required permissions to run that command.',
        thumbnail: {
          url: 'https://http.cat/401.jpg'
        },

        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `${client.config.settings.name} | ${client.config.settings.description}`
        }
      }
    });
    return;
  }

  command.run(client, message, args);
};
