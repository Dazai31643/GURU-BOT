

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://cdn.jsdelivr.net/gh/false-eye/GURU-BOT@main/Assets/mp3/Alive.mp3"
    let url = "https://github.com/false-eye"
    let murl = "https://youtu.be/iI34LYmJ1Fs?si=Cz3j9daLBo6VU2vF"
    let img = "https://telegra.ph/file/f162a86931136bde67488.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "𝟗ine x𝟑",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝑁𝑜𝑡 𝐷𝑒𝑎𝑑 :)",
          body: "𝟗ine x𝟑 × false eye",
          thumbnailUrl: img,
          sourceUrl: 'https://t.me/sarca_stics',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
