const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('recommend')
    .setDescription('Suggests a Warden.')
    .addStringOption(option =>
      option.setName('focus')
        .setDescription('Focus area')
        .setRequired(true)
        .addChoices(
          { name: 'Power', value: 'power' },
          { name: 'Dominance', value: 'dominance' },
          { name: 'Balanced', value: 'balanced' })),
  async execute(interaction) {
    const focus = interaction.options.getString('focus');
    const responses = {
      power: "Best Power Starter: Rudra (F2P) or William (Spender)",
      dominance: "Best Dominance Starter: Gilgamesh (F2P) or William (Spender)",
      balanced: "Balanced: Mike (F2P) or Aurelia (Spender)"
    };
    await interaction.reply({ content: responses[focus] });
  }
};