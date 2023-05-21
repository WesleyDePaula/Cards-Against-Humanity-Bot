const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('startgame')
    .setDescription('Inicia o jogo!'),
    /*  .addIntegerOption(option => {
        option.setName('players')
			.setDescription('Quantas pessoas irão jogar?')
			.setRequired(true)
            .setMinValue(3);
    })  */
    async execute(interaction) {

        const channelId = interaction.channelId;

        const channel = interaction.client.channels.fetch(channelId);

        channel.threads.create({
            name: 'brabo',
            autoArchiveDuration: 60,
            reason: 'Needed a separate thread for food',
        });

        // interaction.channel.threads.create({
        //     name: 
        // });
    }
};