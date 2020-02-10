exports.run = async (client, message) => {
  const quote = await client.quote();
  const ping = await message.channel.send('Ping?');
  ping.edit(`Pong! Latency is \`${ping.createdTimestamp - message.createdTimestamp}ms\`. API Latency is \`${Math.round(client.ping)}ms\` - *${quote}*.`);
  
};

exports.help = {
  name: 'ping',
  example: 'ping'
};

exports.level = (message) => {
  return true;
};