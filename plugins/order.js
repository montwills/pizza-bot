const pizzapi = require('dominos')

module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/], ['direct_message', 'direct_mention'], (bot, message) => {
      bot.reply(message, `Closest pizza store:`)

      pizzapi.Util.findNearbyStores('11 Times Square, New York, NY 10036', 'Delivery', function (storeData) {
        var results = ''
        storeData.result.Stores.filter(function (store) {
          return store.IsOnlineCapable && store.IsOnlineNow && store.IsOpen
        }).map(function(store) {
          results += store.StoreID + "\n" + store.AddressDescription + "\n\n"
        })
        bot.reply(message, results)

        // storeData.result.Stores[0].StoreID + `\n` +  storeData.result.Stores[0].AddressDescription)
      })
    })
  },
  help: {
    command: 'pizza',
    text: `Say "I want a pizza" and I'll search for pizza`
  }
}
