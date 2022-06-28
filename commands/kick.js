module.exports = {
    name: 'kick',

    execute (message, args) {let member = message.mentions.members.first();
    if (!member) return message.reply("Please mention a valid member of this server");
    if (!member.kickable) return message.reply("I cannot kick this member!");
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")

    member.kick()
    message.channel.send(`kicked **${member.user.username}**`)
}}