const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
let warns = JSON.parse(fs.readFileSync("warnings.json", "utf8"));



const token = 'NjEyMDkyMzY0NjU1Mjk2NTM4.XdFgPg.9uJ8ehpvDTh9bE6r0Ue1f8JCyUk';

const prefix = '>';
const mprefix = 'm>';
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;

bot.on('ready', () =>{
    console.log('This bot is online!')
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
            };
            
            });
    }
    if (message.content.startsWith(prefix + "help")) {
        embed = new Discord.RichEmbed ()
        .setAuthor("Commands")
        .setDescription ("level, bot, hex, reddit search \n HandEmojies")
        .setFooter ("React ▶ on your message for what is coming")
        .setThumbnail ("")
        .setColor ("2980B9")
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
                .addField("Coming Soon:", "Yt-Search, Info Commands")
                .setColor("5500FF")
                .setFooter("React ⬅ on your message to go back")
                
                message.channel.send(embed)
                message.react('⬅');
          const filter = (reaction, user) => {
            return ['⬅'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
              const reaction = collected.first();
            if(reaction.emoji.name === '⬅') {
                embed = new Discord.RichEmbed()
                .setAuthor("Commands")
                .setDescription ("level, bot, hex, reddit search ")
                .setThumbnail ("")
                .setColor ("2980B9")
                message.channel.send(embed);
            };
            
            });
            };
            
            });
            
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
        if(message.content.startsWith(prefix + "bot")){
                embed = new Discord.RichEmbed()
                .setAuthor("Bot Information")
                .addField("Created by:", `Daimsen`, true)
                .addField("When the bot is Updated:", "Every Other Day", true)
                .setColor("5500FF")

                message.channel.send(embed);
       
        if(message.content.includes(mprefix + "xpadd")){
            if(!message.member.hasPermissions("ADMINISTRATOR")) return;
            // 1 sec = 1000
        }
        if(message.content.startsWith(prefix + "warn")){
            //>warn @daeshan <reason>
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Please Specify the User");
    if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("This person is a mod/admin so I cannot do that");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });
    
    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#5500FF")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason)

    let warnchannel = message.guild.channels.find(`name`, "modlogs");
    if(!warnchannel) return message.reply("ERROR! Channel not found! Make sure there is a channel called: ``modlogs``");

    warnchannel.send(warnEmbed);
    
    if(warns[wUser.id].warns == 1){
        let muterole = message.guild.roles.find(`name`, "muted");
        let warnrole = message.guild.roles.find(`name`, "Warned 1")
        if(!warnrole) return message.reply("Please make a role called: Warned 1")

        let mutetime = "30s"
        (wUser.addRole(muterole.id));
        message.channel.send(`${wUser.tag} has been temperarly muted because: 1 warn`)
        (wUser.addRole(warnrole.id));

        const filter = (reaction, user) => {
       }
       message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
       .then(collected => {
       const reaction = collected.first();
       
      
       })
       .catch(collected => {
           message.member.removeRole(`name`, "muted");
   });
   
   }

    if(warns[wUser.id].warns == 2){
        let muterole = message.guild.roles.find(`name`, "muted");
        let warnrole = message.guild.roles.find(`name`, "Warned 2")
        if(!muterole) return message.reply("Please make a role named: **muted**");
        if(!warnrole) return message.reply("Please make a role called: Warned 2")

        let mutetime = "60s"
        await(wUser.addRole(muterole.id));
        message.channel.send(`${wUser.tag} has been temperarly muted because: 2 warns`)
        await(wUser.addRole(warnrole.id));

        const filter = (reaction, user) => {
       }
       message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
       .then(collected => {
       const reaction = collected.first();
       
      
       })
       .catch(collected => {
           message.member.removeRole(`name`, "muted");
   });
   
   }
    if(warns[wUser.id].warns == 3){
         let muterole = message.guild.roles.find(`name`, "muted");
         if(!muterole) return message.reply("Please make a role named: **muted**");
         let warnrole = message.guild.roles.find(`name`, "Warned 3")
         if(!warnrole) return message.reply("Please make a role called: Warned 3")
         
         let mutetime = "120s"
         await(wUser.addRole(muterole.id));
         message.channel.send(`${wUser.tag} has been temperarly muted because: 3 warns`)
         await(wUser.addRole(warnrole.id));
         const filter = (reaction, user) => {
        }
        message.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();
        
       
        })
        .catch(collected => {
            message.member.removeRole("627870984506048532");
    });
    
    }
    
    if(warns[wUser.id].warns == 4){
        let muterole = message.guild.roles.find(`name`, "muted");
         if(!muterole) return message.reply("Please make a role named: **muted**");
         let warnrole = message.guild.roles.find(`name`, "Warned 4")
         if(!warnrole) return message.reply("Please make a role called: Warned 4")

         let mutetime = "240s"
         await(wUser.addRole(muterole.id));
         message.channel.send(`${wUser.tag} has been temperarly muted because: 4 warns`)
         await(wUser.addRole(warnrole.id));
         const filter = (reaction, user) => {
        }
        message.awaitReactions(filter, { max: 1, time: 240000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();
        
       
        })
        .catch(collected => {
            message.member.removeRole("627870984506048532");
    });
    }
    if(warns[wUser.id].warns == 5){
        message.guild.member(wUser).kick(reason);
        message.channel.send(`${wUser.tag} has been kicked because: **5 warnings**`)
        
    }
    if(warns[wUser.id].warns == 6){
        message.guild.member(wUser).ban(reason);
        message.channel.send(`${wUser.tag} has been banned because: **6 warnings**`)
        
    }

        }
        if(message.content.startsWith(prefix + "mute")){
            if(!message.member.hasPermissions("MANAGE_ROLES")|| !message.guild.owner) return message.channel.send("Sorry 🤷 Looks like you don't have permission to use this command, ask the owner if you can.");

if(!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Sorry! I don't have permission to use this command!")


let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please specify a user!");

let reason = args.slice(2).join(" ");
if(!reason) reason = "Reason not Specified"

let muterole = message.guild.roles.find(x => x.name === "muted")
if(!muterole){
    try{
        muterole = message.guild.createRole({
            name: "muted",
            color: "#514f48",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGE: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })
    } catch(e) {
        console.log(e.stack);
    }
} 
mutee.addRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Uh oh, looks like you have been muted in ${message.guild.name} for: ${reason}`)
    message.channel.send(`🎉 ${mutee.user.username} was successfully muted successfully! 🎉`)
})

let embed =  new Discord.RichEmbed()
.setColor("#5500FF")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "Mute")
.addField("Mutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.setTimestamp()

let sChannel = message.guild.channels.find(c => c.name === "modlogs")
sChannel.send(embed)
 
        }
        if(message.content.startsWith(mprefix + "help")){
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
            let embed = new Discord.RichEmbed()
            .setColor("5500FF")
            .setAuthor("Moderator Commands")
            .addField("Commands:", "warn, mute")
            message.channel.send(embed);
        }
        if(message.content.startsWith(prefix + "unmute")){
            if(!message.member.hasPermissions("MANAGE_ROLES")|| !message.guild.owner) return message.channel.send("Sorry 🤷 Looks like you don't have permission to use this command, ask the owner if you can.");

if(!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Sorry! I don't have permission to use this command!")
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
let muterole = message.guild.roles.find(x => x.name === "muted");
let unmutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!unmutee) return message.channel.send("Please specify a user!");

unmutee.removeRole(muterole.id).then(() => {
    message.delete()
    unmutee.send(`You have now been unmuted in ${message.guild.name}!`)
    message.channel.send(`${unmutee.user.username} was successfully unmuted!`)
})
let embed = new Discord.RichEmbed()
.setColor("#5500FF")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "Unmute")
.addField("Unmutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.setTimestamp()

let sChannel = message.guild.channels.find(c => c.name === "modlogs")
sChannel.send(embed)
} 
        
}
if(message.content.startsWith(prefix + "redditsearch")){
    let base = "https://www.reddit.com/r/"
    let encode = args.slice(1).join("+");
    let e = new Discord.RichEmbed()
    .setTitle("Reddit Search")
    .setURL(base + encode)
    .setColor("17A589")

    message.channel.send(e);
}
if(message.content.startsWith(prefix + "say")){
    let encode = args.slice(1).join(" ");
      let embed = new Discord.RichEmbed()
      .setThumbnail(`${message.member.iconURL}`)
      .setTitle(encode)
      .setDescription(`<@${message.member.id}> Has sent this message at:`)
      .setColor("17A589")
      .setTimestamp()

      message.channel.send(embed);
      message.delete(100)
}
    if(message.content.startsWith(prefix + "HandEmojies")){
        let embed = new Discord.RichEmbed()
        .setTitle("Hand Emojies 1")
        .addField("Reaction:", "🖖 👌 👋 👏 🤭 👐 🤏 🤚 ✋ ✍️ 🤝 🤙 🤞 🖕")
        .setColor("17A589")
        message.channel.send(embed).then(sentEmbed => {
            sentEmbed.react("🖖")
            sentEmbed.react("👌")
            sentEmbed.react("👋")
            sentEmbed.react("👏")
            sentEmbed.react("🤭")
            sentEmbed.react("👐")
            sentEmbed.react("🤏")
            sentEmbed.react("🤚")
            sentEmbed.react("✋")
            sentEmbed.react("✍️")
            sentEmbed.react("🤝")
            sentEmbed.react("🤙")
            sentEmbed.react("🤞")
            sentEmbed.react("🖕")
        })};
        if(message.content.includes("@everyone")|| message.content.includes("@here")){
            if(message.member.hasPermission("ADMINISTRATOR")){
                
                let embed = new Discord.RichEmbed()
                .setAuthor("Hello! Please refrain from pinging everyone if you are doing it multiple times. \nThank you - Purple Owner")
                .setColor("17A589")
                .setDescription("Have a good day! Thank you for taking your time to read this!")
                .setTimestamp()

                return message.member.send(embed);
            }
            message.delete(100)
            let embed = new Discord.RichEmbed()
            .setAuthor("HEY!")
            .addField("💢", ` <@${message.author.id}> JUST PINGED EVERYONE!!`)
            .setColor("FF0000")
            message.channel.send(embed).then(sentEmbed => {
                sentEmbed.react("💢")
            });
        }
        if (message.content.startsWith(prefix + "quiz")){
            number = 1;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (random){
                case 1: 
                var embed = new Discord.RichEmbed()
                .setAuthor("Difficulty - Easy")       
                .addField("When was this bot made?", "🇦 - 2019 \n🇧 - 2018 \n🇨 - 2017 \n🇩 - 2016")
                .setColor("17A589")
                .setDescription("You have 30 seconds to answer!");
                message.channel.send(embed).then(embedMessage => {
                        embedMessage.react('🇦')
                        embedMessage.react('🇧')
                        embedMessage.react('🇨')
                        embedMessage.react('🇩')
                        message.channel.send(embed);
                    const filter = (reaction, bot) => {
                      return ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name) && user.id === message.author.id;
                      };
                      
                      message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
                      .then(collected => {
                        const reaction = collected.first();
                      
                        if (reaction.emoji.name === '🇦') {
                          message.channel.send(`> You Got it Correct! 🎉`);
                        } else {
                          message.channel.send(`> You Got it Wrong ☹`);
                        }
                      })
                      .catch(collected => {
                        message.channel.send(`> You took to long to respond ☹`);
                      });
                      
                      }
                    )}}},{
                       
    
    })


bot.login(token);