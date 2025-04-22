const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('calculate')
    .setDescription('Estimate XP/Bats.')
    .addIntegerOption(o => o.setName('from').setDescription('From level').setRequired(true))
    .addIntegerOption(o => o.setName('to').setDescription('To level').setRequired(true)),
  async execute(interaction) {
    const from = interaction.options.getInteger('from');
    const to = interaction.options.getInteger('to');
    if (from >= to || from < 0 || to > 450) {
      return interaction.reply({ content: 'Invalid level range.', ephemeral: true });
    }
    const xp = (to - from) * 1200;
    const bats = (to - from) * 15;
    await interaction.reply({ content: `From ${from} to ${to} you'll need:\n- ${xp} XP\n- ${bats} Bats` });
  }
};