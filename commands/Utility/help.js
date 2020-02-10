exports.run = async (client, message) => {
  message.channel.send('Gee wiz, I don\'t know how to do that yet. Why don\'t you make it so I can?');
};
  
exports.help = {
  name: 'help'
};

exports.level = (message) =>{ // eslint-disable-line no-unused-vars
  return true;
};