# Discord template bot

A dead simple discord command handeler and bot created by The Strand Group.

## Prerequisites

In order to set up the system you must have the following installed:

* Nodejs
* Git
* NPM

You must also have: 

* A Discord API bot account token

## Getting Started

First, make sure you have the latest version of Node.js NPM (node package panager), and Git installed on the machine you plan to run the bot on.

Next, you must have a Discord API bot token. This can be created by navigating to your Discord Developer portal home [link](https://discordapp.com/developers/applications/), where a "New Application" button will appear in the upper-right corner. Click this, and fill out the required information. Once the application creation is complete, click on the "Bot" on the application settings page's sidebar. Create the bot with any required information, this can all be changed later if you'd perfer. The bot will be created and a token will appear. Save this token for future reference. ***AND NEVER. EVER.** share this token with anybody.*

Once that's complete, clone the github repo by running `git clone https://github.com/The-Strand-Group/templatebot.git`. This should create a folder in your current directory with the repo's files.

Finally, replace the token in `config.js` with your bot's token that you created eariler. Then run `npm install` to install the required files, and you're good to go!
