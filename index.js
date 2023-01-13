class CaeserCypher {
    #alphabet

    constructor() {
      this.#alphabet = 'abcdefghijklmnopqrstuvwxyz'
      Object.freeze(this.#alphabet)
    }

    #validateMessage (message) {
      if (typeof message != 'string') {
        throw new Error('❌ "message" argument should be a string type')
      }
      if (!/^[a-zA-z]+$/g.test(message)) {
        throw new Error('❌ "message" argument is not a valid. characters should be alphabetic only')
      }
    }

    #validateKey (key) {
      if (typeof key != 'number' && typeof key != 'string') {
        throw new Error('❌ "key" argument should be a number type or string type')
      }
      if (typeof key == 'string' && isNaN(Number(key))) {
        throw new Error('❌ "key" should be contain a numeric value')
      }
    }

    #validateProps(message, key) {
      this.#validateMessage(message)
      this.#validateKey(key)
      message = message.toLowerCase()
      key = Number.parseInt(key)
      return [message, key]
    }

    #shiftToNewChar(index, offset) {
      return this.#alphabet.charAt((index + offset) % this.#alphabet.length)
    }

    encrypt (message, key) {
      [message, key] = this.#validateProps(message, key)
      let encryptedMessage = ''
      for (const char of message) {
        let newChar = char
        const charIndexAtAlphabet = this.#alphabet.indexOf(char)
        if (charIndexAtAlphabet >= 0) {
          newChar = this.#shiftToNewChar(charIndexAtAlphabet, key)
          encryptedMessage += newChar
        }
      }
      return encryptedMessage
    }

    decrypt(message, key) {
      key = this.#alphabet.length - key
      return this.encrypt(message, key)
    }
}

module.exports = { CaeserCypher }
