const { SlashCommandBuilder } = require('discord.js');
const quotes = [
  "Even the moon bleeds when the night is long.",
  "Blood is the currency of power. Spend it wisely.",
  "The shadows remember everything.",
  "A true Warden doesn’t fear death — they feed on it."
];
module.exports = {
  data: new SlashCommandBuilder().setName('quote').setDescription('Get a vampire quote.'),
  async execute(interaction) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await interaction.reply({ content: quote });
  }
};