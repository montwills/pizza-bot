module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/], ['direct_message', 'ambient'], (bot, message) => {
      bot.reply(message, `Searching for closest pizza store, <@${message.user}>.`)
    })
  },
  help: {
    command: 'pizza',
    text: `Say "I want pizza" and I'll search for pizza`
  }
}
