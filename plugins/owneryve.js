let handler = function (m) {
	this.sendContact(m.chat, '62895411143170', 'Owner TiaBot :)', m)
}

handler.customPrefix = ['🍭Owner TiaBot'] 
handler.command = new RegExp

module.exports = handler
