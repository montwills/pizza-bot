const pizzapi = require('dominos')

module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/], ['direct_message', 'direct_mention'], (bot, message) => {
      bot.reply(message, `Searching for closest pizza store, <@${message.user}>.`)
    })
  },
  help: {
    command: 'pizza',
    text: `Say "I want pizza" and I'll search for pizza`
  }
}

let stores = pizzapi.Util.findNearbyStores('11 Times Square, New York, NY 10036', 'Delivery', function(storeData) {
  console.log("Stores ", storeData)
})
