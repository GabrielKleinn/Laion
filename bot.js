var Eris = require('eris');
var bot = new Eris("NDMxMjgzMzI4NjI1Mjc4OTk2.DacoiQ.EC_3orI9UP_EI_BZpgAsFbpBeDA");

bot.on("ready", () =>{
	console.log("Miau");
})

bot.on("messageCreate", (msg) => {
if(msg.content.indexOf("m!Laion") == 0){
bot.createMessage(msg.channel.id, msg.author.mention+" Miaau");
}
if(msg.content.indexOf("m!Number") == 0){
bot.createMessage(msg.channel.id, msg.author.mention+" Mmm "+Math.floor(Math.random() * 30));
}
});

bot.connect();
