require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
];

 // change the texts up to change the bot's status
 // you can use Watching , Playing , Listening and Streaming for the ActivityType
 // if you want to make it Streaming, make sure to add a url to a youtube or twitch link.

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

client.login(process.env.TOKEN);
