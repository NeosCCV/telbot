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
  if (lastmsg == "A") {
    msg.reply.text("A");
  }
  if (lastmsg == "ª") {
    msg.reply.text("ª");
  }
  if (lastmsg === 'mesco lindo') {
    msg.reply.text('posí');
  }
  if (lastmsg === 'bigu manda') {
    msg.reply.text('a ver tecnicamente si');
  }
  if (lastmsg === 'NeOS ataca!') {
    msg.reply.text('MAO');
  }
  if (lastmsg === "/help") {
    msg.reply.text("no help for u :,<")
  }
  if (lastmsg.indexOf("/math ")==0) {
    var result;
    var operation=lastmsg.slice(6);
    try {result=eval(operation);}
    catch(err) {msg.reply.text("error lmao");}
    msg.reply.text(result);
  }
});

bot.start();




























const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('uwu');
});
server.listen(3000);
