process.env["NTBA_FIX_319"] = 1
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');
dotenv.config()

const bot = new TelegramBot(process.env.token, {polling: true});

bot.on('message', (msg) => {

    if (msg.text.toString().toLowerCase() === "sa") {
        bot.sendMessage(msg.chat.id,"aleyküm selam kardeşim");
    } else if(msg.text.toString() === "lan gazili"){
        bot.sendMessage(msg.chat.id, "Emredin hümkarım. Sözünüz benim için bir emirdir efendim.")ş
    }
    
});