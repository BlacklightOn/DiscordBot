'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
	console.log('looooooool!');

	client.user.setActivity("Among Us Guide", {
		type: "STREAMING",
		url: "https://www.youtube.com/watch?v=i_iY-Qyzswk&list=PLgxqkx0aE1yAS-2NO1J6beld3RAVRn5Yb"		
	});
});

//client.on('guildMemberAdd', member => {

	//const channel = member.guild.channels.cache.find(ch => ch.name === '🔪-general');
	//if (!channel) return;
	//channel.send(`Bienvenue sur le serveur, ${member}`);

//});

// emoji:\N{::}

client.on('guildMemberAdd', member => {

	const channel = member.guild.channels.cache.find(ch => ch.name === '👋➖bienvenue');


	const exampleEmbed = new Discord.MessageEmbed()

		.setColor('#fbffbd')
		.addField(`<:wavinghandmicrosoft:794680274255609866> Bienvenue sur le serveur TᗯITᑕᕼ ᖴᖇ!`, `<a:snowman:785427771660828713>Bienvenue ${member}!`, true)
		.setThumbnail('https://i.redd.it/vlb0h4qreyp51.jpg')
		.setFooter('wayllle dev.');

	if (!channel) return;

	channel.send(exampleEmbed);
});

//news

client.on('guildMemberAdd', member => {
	member.createDM().then(channel => {
		return channel.send({
			embed:
			{
				color: Math.floor(Math.random() * 16777214) + 1,
				title: '**Bienvenue**',
				author: {
					name: 'Twitch\u2019s Head',
					icon_url: 'https://i.redd.it/vlb0h4qreyp51.jpg',

				},
				thumbnail: {
					url: 'https://i.imgur.com/JPwXKHW.gif',
				},
				fields: [
					//
					{
						name: 'Information:',
						value: 'Hey bienvenue à toi ,merci de lire le R\u00E8glement',
						inline: false,
					},
				],

				footer: {
					icon_url: 'https://i.redd.it/vlb0h4qreyp51.jpg',
				},
			}
		});
	}).catch(console.error)
})

// //apostrophe: \u0027 custom emoji : <::>
client.on('message', (message) => {

if (message.content === '.rules') {
	message.channel.send({
		embed:
		{
			color: Math.floor(Math.random() * 16777214) + 1,
			title: '',
			description: '<:__:785427614588338207>**Nous suivons les directives et les conditions d\u0027utilisation de Discord Directives Discord:** https://discordapp.com/guidelines **Conditions d\u0027utilisation de Discord: **https://discordapp.com/terms Nous sommes un serveur Français.**Les moins de 13 ans ne doivent pas être sur Discord et seront interdits.**',
			author: {},
		}
	});

}
});

client.on('message', (message) => {

	if (message.content === '.rules') {
		message.channel.send({
			embed:
			{
				color: Math.floor(Math.random() * 16777214) + 1,
				title: '',
				description: '<:ban:785427760742137908> Pour te faire vérifier check la réaction',
				author: {},
			}
		});

	}
});


client.on('message', (message) => {

	if (message.content === '.rules') {
		message.channel.send({
			embed:
			{
				color:('#24d124'),
				title: '',
				description: '<:__:785427614588338207> Vérification',
				author: {},
			}
		});

	}
});


//

	client.login('NzgxMDg1ODg0MTAyODY5MDIz.X74g6g.cAjd7FV0gxUuck6xhnWG81lP5cY');

