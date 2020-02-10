module.exports = async client => {
  client.logger.ready(`${client.user.tag} is connected to Discord!`);

  client.user.setActivity(`with sandboxes | ${client.config.settings.prefix}help`, {
    type: 'PLAYING'
  });
};
