require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ] 
})

client.on('ready', (c)=> {
    console.log(`${c.user.username} at your service.`)
});

client.on('messageCreate', (message)=>{
    if (message.author.bot) {
        return;
    }

    if (message.content === 'kys'){
        message.reply('Oh.. my.. dont say that, young master.')
    }

    if (message.content === 'Hello') {
        message.reply('Good Morning/Afternoon/Evening. Welcome back young master, How could i help you today?');
    }
})

client.login(process.env.TOKEN);
