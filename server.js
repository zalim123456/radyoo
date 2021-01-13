//7/24
{
  const express = require("express");
  const app = express();
  const http = require("http");
  app.get("/", (request, response) => {
    console.log(
      ` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`
    );
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
} 

const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");


client.on("ready", () => {
  console.log("Bot Başarılı Bir Şekilde Çalıştı");
  var oyun = [
    "",
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(
      oyun[random],
      ""
    );
  }, 2 * 2500);
});

client.on("warn", info => console.log(info));

client.on("error", console.error);


client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "komutlar")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "komutlar", file));
  client.commands.set(command.name, command);
} 


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    

    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/); 
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      
      client.commands.get(command).execute(client, message, args);
    } catch (err) {
      //IF IT CATCH ERROR
      console.log(err);
      message.reply("Bu komutu kullanırken hata alıyorum");
    }
  }
});

//7/24
{
  const express = require("express");
  const app = express();
  const http = require("http");
  app.get("/", (request, response) => {
    console.log(
      ` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`
    );
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
} 