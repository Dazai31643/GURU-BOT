/* CS [ CROP STICKER WITH 1:1 RATIO ] - FOR MD [ MULTI DEVICE ] - BY @SHADOW */

const {	addExif, bot, cropsticker } = require('../lib/')

bot(
	{
		pattern: 'cs',
		fromMe: true,
		desc: 'creat sticker as 1:1',
		type: 'sticker',
	},
	async (message, match) => {
		if (
			!message.reply_message ||
			(!message.reply_message.video && !message.reply_message.image)
		)
			return await message.send('*Reply to image/video*')
		return await message.send(
			await cropsticker(
				'str',
				await message.reply_message.downloadAndSaveMediaMessage('sticker'),
				message.reply_message.image
					? 1
					: //: message.reply_message.seconds < 10 ?
					  2
				//: 3
			),
			{ isAnimated: !!message.reply_message.video, quoted: message.quoted },
			'sticker'
		)
	}
)

/* ©2022 BY SHADOW */
