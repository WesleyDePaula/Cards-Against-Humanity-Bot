const { Client, GatewayIntentBits, Collection, Events } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const logger = require('./utils/Logger.js');
const interactionHandler = require('./interactionHandler.js');
require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

commandFiles.forEach(file => {
    const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
		return;
	}
	logger.warn(`The command at ${filePath} is missing a required "data" or "execute" property.`);
});

client.once(Events.ClientReady, () => {
    logger.info('Successfully authenticated!');
});

client.on(Events.InteractionCreate, interactionHandler);

client.login(process.env.BOT_TOKEN).catch((result) => {
    logger.error('A error ocurred on trying to authenticate: ' + result);
    throw result;
});