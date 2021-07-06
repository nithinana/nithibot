const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("nithibot is online.")       
})

app.listen(3000, () => {
  console.log("nithinan has started.")
})
let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "COMMAND NAME") {
  message.channel.send("COMMAND RESPONSE")
}
})

client.login(process.env.TOKEN)
