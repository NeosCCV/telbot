const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);
const http = require('http');

bot.on(['/start'], msg => {
  return bot.sendMessage(msg.from.id, 'hi');
});
bot.on('text', msg => {
  var lastmsg=msg.text
  if (lastmsg == "uwu") {
    msg.reply.text("owo");
  }
  
});

bot.start();




























const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('uwu');
});
server.listen(3000);
