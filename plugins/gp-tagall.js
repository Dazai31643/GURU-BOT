let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ اسم القروب : *${groupMetadata.subject}*\n▢ عدد الاعضاء : *${participants.length}*${text ? `\n▢ الرساله المهمه : ${text}\n` : ''}\n┌───⊷ *منشن جماعي*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ Dazai ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
