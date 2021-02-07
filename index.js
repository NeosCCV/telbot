try {
    const TeleBot = require('telebot');
    const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);
    const http = require('http');
    const fs = require("fs");
    const highstone = 'gay'
    const hsusers = ["@DumbRacc", "@Kryoshade", "@Sincubus", "@Ecarus", "@Foresta", "@Mesco0", "@ElenitaMiaw", "@Bigusista", "@neosccv"];
    const cron = require('node-cron');

    bot.on(['/start'], msg => {
        return bot.sendMessage(msg.from.id, 'hi');
    });

    cron.schedule('0 16 * * *', () => {
        console.log('shipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipshipship');
        var random1 = Math.floor((Math.random() * hsusers.length));
        var random2 = Math.floor((Math.random() * hsusers.length));
        while (random2 == random1) {
            random2 = Math.floor((Math.random() * hsusers.length));
        }
        bot.sendMessage(process.env.HS_ID, "El ship del día es " + hsusers[random1] + " y " + hsusers[random2]);

    }, {
        scheduled: true,
        timezone: "Europe/Madrid"
    });

    bot.on('text', msg => {
        var lastmsg = msg.text
        var lastmsglc = lastmsg.toLowerCase();
        var date = new Date();

        if (lastmsg == "uwu") {
            msg.reply.text("owo");
        }
        if (lastmsg == "sisoy") {
            msg.reply.text("sieres");
        }
        if (lastmsg == "sieres") {
            msg.reply.text("sies");
        }
        if (lastmsg == "sies") {
            msg.reply.text("sies");
        }
        if (lastmsg == "sisomos") {
            msg.reply.text("sisois");
        }
        if (lastmsg == "sisoi") {
            msg.reply.text("sieres");
        }
        if (lastmsg == "F") {
            msg.reply.text("uck");
        }
        if (lastmsg == "oh no") {
            msg.reply.text("ᵒʰ ⁿᵒ");
        }
        if (lastmsg == "A") {
            msg.reply.text("A");
        }
        if (lastmsg == "a") {
            msg.reply.text("a");
        }
        if (lastmsg == "xd") {
            msg.reply.text("Borde de mierda");
        }
        if (lastmsg == "ª") {
            msg.reply.text("ª");
        }
        if (lastmsg == "masajito porfa") {
            msg.reply.text("pawpaw");
        }
        if (lastmsg.indexOf(":v") != -1) {
            msg.reply.text("Illegal emoticon detected, airstrike imminent");
        }
        if (lastmsg.indexOf(":V") != -1) {
            msg.reply.text("Illegal emoticon detected, airstrike imminent");
        }
        if (lastmsglc.indexOf("culo") != -1) {
            msg.reply.text("jaja ha dicho culo");
        }
        if (lastmsglc.indexOf("cum") != -1) {
            msg.reply.text("jaja ha dicho cum");
        }
        if (lastmsglc.indexOf("pene") != -1) {
            msg.reply.text("jaja ha dicho pene");
        }
        if (lastmsglc == 'mesco lindo') {
            msg.reply.text('posí');
        }
        if (lastmsglc == 'mesco cute') {
            msg.reply.text('posí');
        }
        if (lastmsglc == 'krovy lindo') {
            msg.reply.text('posí');
        }
        if (lastmsglc == 'krovy cute') {
            msg.reply.text('posí');
        }
        if (lastmsglc == 'neos lindo') {
            msg.reply.text('hmm lemme check...');
            msg.reply.text('nope, checked the database and thers nothing about this neos guy');
        }
        if (lastmsglc == 'neos baby') {
            msg.reply.text('a ver, si es');
        }
        if (lastmsglc == 'neos cute') {
            msg.reply.text('hmm lemme check...');
            msg.reply.text('nope, checked the database and thers nothing about this neos guy');
        }
        if (lastmsglc === 'bigu manda') {
            msg.reply.text('a ver tecnicamente si');
        }
        if (lastmsglc === "/help") {
            msg.reply.text("no help for u :,<")
        }

        if (lastmsg.indexOf("/math ") == 0) {
            var result;
            var operation = lastmsg.slice(6);
            try { result = eval(operation); } catch (err) { msg.reply.text("error lmao"); }
            msg.reply.text(result);
        }

        //END
    });


    bot.start();
} catch (error) {

}

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('uwu');
});
server.listen(3000);