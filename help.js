const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('help').setDescription('List all commands.'),
  async execute(interaction) {
    await interaction.reply({
      content: '**Bot Commands:**\n/guide\n/quote\n/recommend\n/calculate\n/cards\n/help',
      ephemeral: true
    });
  }
};