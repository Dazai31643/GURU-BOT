//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/false-eye/GURU-BOT/main/Assets/mp3/Guru1.mp3"
    let url = "https://github.com/false-eye"
    let murl = "https://www.instagram.com/false_eye"
    let hash = global.botname
    let img = "https://telegra.ph/file/38ea520a938ca4a95c65d.jpg"
    let num = "919539901834"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "999",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: " 𝑦𝑜𝑢'𝑟𝑒 𝑚𝑦 𝑒𝑐𝑠𝑡𝑎𝑠𝑦",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
