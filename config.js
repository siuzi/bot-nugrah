
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6289502618973','0']
global.packname = 'Bot Whatsapp'
global.author = 'Nurga'
global.sessionName = 'data'
global.prefa = ['','!','.','#']
global.ownername = 'Nugrah'
global.sp = '>'
global.mess = {
    admin: 'Buat admin aja coeg',
    botAdmin: 'jadiin botnya jadi admin coy',
    owner: 'khusus owner',
    group: 'cuman buat grup',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'bukan buat kmu',
    wait: 'renungkan',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
