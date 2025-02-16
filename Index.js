// ## Fixed the invalid syntax problem

const { Client } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const axios = require('axios')

const token = 'TOKEN'; //the bots token
const clientId = 'CLIENTID'; //the bots client id// user id
const advertise = false; //if you want it to send server invite after command ran keep it true if not keep it false
const serverinvite = "sever invite"; //server invite for when command ran it replies with server invite
const madeby = "mrdavidss"; //for embed like "Made By {name}"
const apikey = "FfWIqEqREs7-3mcz26eDAA"; 
const commands = [
    {
        name: 'fluxus',
        description: 'Whitelist Fluxus',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Fluxus link',
                required: true,
            },
        ],
    },
    {
        name: 'codex',
        description: 'Whitelist Codex',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Codex link',
                required: true,
            },
        ],
    },
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
    {
        name: 'trigon',
        description: 'Gets Trigon Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Trigon link',
                required: true,
            },
        ],
    },
];

const client = new Client({ intents: 3276799 });
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Adding Bypass Commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully got bypass commands!.');
    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {
    console.log('Bot is ready!');
      console.log('by mrdavidss on discord!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'fluxus') {
        await fluxus(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'codex') {
        await codex(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'delta') {
        await delta(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'trigon') {
        await trigon(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    }
});

async function fluxus(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Fluxus",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1241789308348923975/1241797433101385801/IMG_1486.png?ex=664b817b&is=664a2ffb&hm=143f12583368d710a98f36f681d7307cd1ec1c26fee8a7e152f0bfbd852eeb69&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://flux.li/android/external/start.php?HWID=')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `http://ace-bypass.vercel.app/api/bypass?url=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Key System completed!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Fluxus",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1241789308348923975/1241797433101385801/IMG_1486.png?ex=664b817b&is=664a2ffb&hm=143f12583368d710a98f36f681d7307cd1ec1c26fee8a7e152f0bfbd852eeb69&' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Please Wait For Countdown Or Restart Roblox.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Fluxus",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1241789308348923975/1241797433101385801/IMG_1486.png?ex=664b817b&is=664a2ffb&hm=143f12583368d710a98f36f681d7307cd1ec1c26fee8a7e152f0bfbd852eeb69&' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${user}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Fluxus",
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1241789308348923975/1241797433101385801/IMG_1486.png?ex=664b817b&is=664a2ffb&hm=143f12583368d710a98f36f681d7307cd1ec1c26fee8a7e152f0bfbd852eeb69&' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Fluxus Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function codex(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Codex",
            thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://mobile.codex.lol?token=') || link.startsWith('https://mobile.codex.loltoken=')) {
        const token = link.split('=')[1];
        const apiUrl = `http://ace-bypass.vercel.app/api/bypass?url=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "CodeX completed!!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Codex",
                        thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Wait Up To A Minute Or Restart Roblox.```' },
                            { name: 'Token:', value: `${box}${token}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Codex",
                        thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
                        fields: [
                            { name: 'Status:', value: '```Either Token Is Invalid Or Api Is Not Working.```' },
                            { name: 'Token:', value: `${box}${token}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Codex",
                    thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Codex Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function delta(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Delta Key",
            thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `http://ace-bypass.vercel.app/api/bypass?url=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Delta Key",
                        thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Delta Key",
                        thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Delta key",
                    thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Delta Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function trigon(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Trigon Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                   
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://trigonevo.com/getkey/?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `http://ace-bypass.vercel.app/api/bypass?url=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Trigon Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                            
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Trigon Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                             
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Trigon key",
            		thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                   	
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Trigon Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}



client.login(token);
