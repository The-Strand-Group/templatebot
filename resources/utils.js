module.exports = (client) => {
  // Clean and orginize evaled code
  client.clean = async (client, text) => {
    if (text && text.constructor.name === 'Promise') {
      text = await text;
    }
    if (typeof (text) !== 'string') {
      text = require('util').inspect(text, {
        depth: 0
      });
    }
    if (typeof (text) === 'string') {
      text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replace(client.token, 'TOKEN');
    }
    return text;
  };

};
