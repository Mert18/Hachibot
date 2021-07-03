process.env["NTBA_FIX_319"] = 1
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');
dotenv.config()

const bot = new TelegramBot(process.env.token, {polling: true});

bot.on('message', (msg) => {

    var Hi = "sa";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"aleyküm selam kardeşim");
    }
    
    });