const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = process.env.BOT_TOKEN;

client.on("ready", async () => {
	console.log(`Bot cargado! ${bot.user.username}`);
	
	try {
		let link =  await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});

client.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type ==="dn") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	
	if(!command.startsWith(prefix)) return;
	
	if(command === `${prefix}userinfo`) {
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription("Información del usuario:")
			.setColor("#9B59B6")
			.addField("Nombre de usuario:", `${message.author.username}#${message.author.discriminator}`)
			.addField("ID", message.author.id)
			.addField("Se unió el:", message.author.createdAt);
		
		message.channel.sendEmbed(embed);
		
		return;
	}
	if(command === `${prefix}help`) {
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription(":theinfinity: The Infinity Bot Help!")
			.setColor("#9B59B6")
			.addField("Nombre de usuario:", `${message.author.username}#${message.author.discriminator}`)
			.addField("ID", message.author.id)
			.addField("Se unió el:", message.author.createdAt);
		
		message.channel.sendEmbed(embed);
		
		return;
	}
});

bot.login(process.env.BOT_TOKEN);
