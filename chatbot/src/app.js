const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('336379356:AAHKxHlKfhcyhR7oKGABQB4kE67upHnGD6g')

class CasaDoCodigoController extends TelegramBaseController {
  sendNovidades(scope) {
    scope.sendMessage('As novidades são nenhuma')
  }

  get routes() {
    return {
      'sendNovidades': 'sendNovidades'
    }
  }
}

chatbot.router
       .when(
         new TextCommand('/novidades', 'sendNovidades'), new CasaDoCodigoController()
       )
