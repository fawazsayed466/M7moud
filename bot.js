const Discord = require('discord.js');
const client = new Discord.Client();
//fofo


client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {                           
client.user.setGame(`عشان تحط أش يبي يلعب الشخص فيك تحط لبدك ياه`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});


client.on('ready',async () => {
  client.channels.find(ch => ch.id === "اي دي الروم الصوتي يا محمود" && ch.type === 'voice').join();
});



client.login(process.env.BOT_TOKEN);
