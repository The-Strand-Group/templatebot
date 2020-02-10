/* Copyright 2020 The Strand Group
 * Authored by Sword
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Import required items
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client(); // Our Discord client, it's what lets us talk to the Discord API as a bot

client.logger = require('./resources/logger'); // Logs things to the console in a nice manner

client.config = require('./config'); // Config file, contains settings, token, etc

require('./resources/utils')(client); // General miscellaneous items to make things work better

client.quote = require('./resources/quote'); // Quotes from Marvin (Hitchikers Guide to The Galaxy)

client.commands = new Discord.Collection(); // This is where all of the bot's commands will be stored


client.modules = ['Administration', 'Miscellaneous', 'Utility']; // These are the modules in the commands folder, the names of the modules MUST match up with the names of the folders

const start = async () => {
  client.modules.forEach(cat => {

    fs.readdir(`./commands/${cat}/`, (err, files) => { // Here we go through all modules to find commands

      if (err) throw err; // If there is error, throw an error in the console

      const filtered = files.filter(f => f.endsWith('.js')); // Adds all JavaScript files to the var, no others.

      client.logger.load(`Found ${filtered.length} commands in module ${cat}`); // When commands of a module are successfully found and filtered, you can see it in the console

      // Take all of our JavaScript files and perform this for each of them
      filtered.forEach(f => {

        const fullFile = require(`./commands/${cat}/${f}`); // Grab the file 

        client.commands.set(fullFile.help.name, fullFile); // Add the command to the commands list, with it's name and command file

        client.logger.load(`Loaded command ${fullFile.help.name} (${f}) in module ${cat}`);
      });
    });
  });

  client.logger.load('Completed command loading');


  fs.readdir('./events/', (err, files) => {
    if (err) throw err; // If there's an error throw it to the console

    const filtered = files.filter(f => f.endsWith('.js')); // Adds all JavaScript files to the var, no others.

    client.logger.load(`Found ${files.length} events`); // When events are successfully found and filtered, you can see it in the console

    filtered.forEach(file => {
      const evnt = require(`./events/${file}`); // Assign the event file to the evnt variable

      const eventName = file.split('.')[0]; // Get the name from the file's name

      client.on(eventName, evnt.bind(null, client)); // Whenever the event happens, do the event - (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

      client.logger.load(`Loaded ${eventName} (${file})`); // Logs to the console that the event has been loaded
    });
  });

  client.logger.load('Completed event loading'); 

  client.login(client.config.token); // Login with the token as defined in the config
};

// Runs all of the code in the start function
start();
