const logger = require('./utils/logger.js');

module.exports = async function (interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        logger.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        logger.error(error);
        await interaction.reply({ content: 'Ocorreu um erro ao executar o comando!', ephemeral: true });
        throw error;
    }
};