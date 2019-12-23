const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent")
const prefix = ">"
const fs = require ("fs");


module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermissions("MANAGE_ROLES")|| !message.guild.owner) return message.channel.send("Sorry 🤷 Looks like you don't have permission to use this command, ask the owner if you can.");

if(!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Sorry! I don't have permission to use this command!")


let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please specify a user!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "Reason not Specified"

let muterole = message.guild.roles.find(x => r.name === "muted")
if(!muterole){
    try{
        muterole = await message.guild.createRole({
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
.setColor(purple)
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "Mute")
.addField("Mutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.setTimestamp()

let sChannel = message.guild.channels.find(c => c.name === "modlogs")
sChannel.send(embed)
 }



module.exports.config = {
    name: "mute",
    description: "Mutes a member",
    usage: ">mute <@user> <reason>",
    accessableby: "Members",
    aliases: ["m", "nospeak"]
}