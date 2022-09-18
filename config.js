/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ APIKEY TERPISAH ]━━━━━━━━━━━━━━━━━//
lolkey = 'Apikey1'
//━━━━━━━━━━━━━━━[ SETTINGS ]━━━━━━━━━━━━━━━━━//
global.owner = ['923072291944','923072291944','923072291944','0','923072291944']
global.premium = ['923072291944']
global.packname = '🤺🗡️⚔️©Pak-Bot-Ledy-C™⚔️🗡️🤺'
global.author = '┼☪⚔♱☻☹♞♯.ṬḀḶḨẢ.♯♞☹☻♱⚔☪┼'
global.sessionName = 'hisoka'
global.prefa = ['','.']
global.sp = '⭔'
global.mess = {
    success: 'Ｓｕｃｃｅｓ．．．',
    admin: 'Only admin!',
    botAdmin: 'Bot must be admin!',
    owner: 'Only owner of Bot',
    group: 'Only in Group!',
    private: 'Only in Private Chat!',
    bot: 'Only Nomor Bot',
    wait: '📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆',
    endLimit: 'youre limits of use are full, it will be reset after 12 hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/kitzuna.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
