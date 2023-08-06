const { Telegraf } = require("telegraf");
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

const web_link = process.env.WEB_LINK;

bot.start((ctx) =>
  ctx.reply("Welcome : ✋✋✋", {
    reply_markup: {
      keyboard: [
        [
            { text: "restorant 😋🍟", web_app: { url: web_link } }
        ]],
    resize_keyboard: true,
    },
  })
);

bot.launch();