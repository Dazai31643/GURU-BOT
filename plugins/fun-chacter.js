let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "Mention whose you want to check character"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "Sigma",
      "Generous",
      "Grumpy",
      "Overconfident",
      "Obedient",
      "Good",
      "Simp",
      "Kind",
      "Patient",
      "Pervert",
      "Cool",
      "Helpful",
      "Brilliant",
      "Sexy",
      "Hot",
      "Nigger",
      "Faggot",
      "Rizzler",
      "Pedophile",
      "Gay",
      "Lesbian",
      "Nazi",
      "Rapist",
      "Cunt",
      "Midget",
      "9/11",
      "Gorgeous",
      "Cute",
      "Sura",
      "Retarded",
      "Autistic",
      "Epstein Underdog",
      "Stephen Hawkings From Epstein",
      "Slut",
      "Prostitute",
      "Bollocks",
      "Hairynigga",
      "Cum Lover",
      "Brainwashed Northy",
      "Bisexual",
      "Transgender",
      "Shameless",
      "Pathetic",
      "Got no hoes",
      "Simper",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `Character of @${mentionedUser.split("@")[0]}  is *${userCharacterSeletion}* 🔥`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(character)/i

export default handler 
