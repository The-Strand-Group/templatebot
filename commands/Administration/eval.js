exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const { Util } = require('discord.js');
  const code = args.join(' '); // Generate string input.
  try {
    // eslint-disable-next-line no-eval
    const evaled = eval(code); // Evaluate the code
    const clean = await client.clean(client, evaled); // Clean the code
    if (clean.length > 1950) {
      const messages = Util.splitMessage(clean);
      messages.forEach(value => message.channel.send(`\`\`\`js\n${value}\`\`\``));
    } else {
      message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
    }
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
};

exports.help = {
  name: 'eval',
  usage: 'eval [code]'
};

exports.level = (message) => {
  return message.client.config.ownerID == message.author.id;
};