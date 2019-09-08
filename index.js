const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require("fs");


const token = 'NjEyMDkyMzY0NjU1Mjk2NTM4.XXUGeg.JCwyJoz6CHj1Bhki4Yd2FCFDahc';

const prefix = '>';
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;

bot.on('ready', () =>{
    console.log('This bot is online!')
})
bot.on('error', () =>{
    
    let errorembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Uh oh!")
    .setTimestamp()
    .setFooter("The bot has ran into an erorr!!!");
  
    let loggingChannel = newMessage.guild.channels.find(ch => ch.name === "bot-errors")
    if(!loggingChannel) return;
  
    loggingChannel.send(errorembed)
})
bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'hex':
        embed = new Discord.RichEmbed()
        .setAuthor("Hex Codes P1")
        .addField("Colors:", "**Red:** [FF0000]    **Orange:** [FF6C00]    **Yellow:** [F0FF00] \n**Green:** [0CFF00]    **Light Blue:** [00FFB6]    **Blue:** [0093FF] \n**Purple:** [5500FF]    **Pink:** [EC00FF]")
        .setFooter("React with: ▶ on your message for P2")
        .setColor("5500FF")

        message.channel.send(embed)
        message.react('▶');
          const filter = (reaction, user) => {
            return ['▶'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
              const reaction = collected.first();
            if(reaction.emoji.name === '▶') {
                embed = new Discord.RichEmbed()
                .setAuthor("Hex Codes P2")
                .addField("Colors p2:", "**Red & Orange:** [FF4200]    **Orange & Yellow:** [FFAE00]    **Lime Green:** [C5FF00] \n**Teal:** [00FF78]    **Purple & Pink:** [5D00FF]    **Light Red:** [FF004D]")
                .setColor("5500FF")
                .setFooter("P3 Soon")
                
                message.channel.send(embed);
            }
            
            })
            case 'bot':
                embed = new Discord.RichEmbed()
                .setAuthor("Bot Information")
                .addField("Created by:", `The Hatter`, true)
                .addField("When the bot is Updated:", "Every Other Day", true)
                .setColor("5500FF")

                message.channel.send(embed);
                break;


    }
    if (message.content.includes (prefix + "help")) {
        embed = new Discord.RichEmbed ()
        .setAuthor("Commands")
        .setDescription ("level, bot")
        .setFooter ("More Commands coming soon")
        .setThumbnail ("")
        .setColor ("2980B9")
        message.channel.send(embed)
    }
    let xpAdd = Math.floor(Math.random() * 7) + 8;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
    

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp [message.author.id].xp = curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setAuthor("Level Up!!! +1 Level!")
        .setColor("00FFE8")
        .addField("New level", curlvl + 1)
        if(!message.author.id === 612092364655296538){
            return;
        }
        
        message.channel.send(lvlup).then(d_msg => { d_msg.delete(5000)});
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        
            if(!message.author.id === 612092364655296538){
                return;
            }
        });
        if(message.content.startsWith(prefix + "level")){
            let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvlXp = curlvl * 300;
let difference = nxtLvlXp - curxp;

let lvlembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("00FFE8")
.addField("level", curlvl, true)
.addField("XP", curxp, true)
.setFooter(`${difference} XP til level up`)

message.channel.send(lvlembed).then(d_msg => { d_msg.delete(5000)});
        }  
    })


bot.login(token);
