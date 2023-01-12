class CaeserCypher {
    #alphabet
    #module

    constructor() {
      this.#alphabet = 'abcdefghijklmnopqrstuvwxyz'
      this.#module = this.#alphabet.length
      Object.freeze(this.#alphabet)
      Object.freeze(this.#module)
    }

    #validateMessage (message) {
      if (!/^[a-zA-z]+$/g.test(message)) {
        throw new Error('❌ "message" argument is not a valid. Enter only alphabetic characters')
      }
    }

    #validateKey (key) {
      if (isNaN(key) || typeof key != 'number') {
        throw new Error('❌ "key" argument is not a valid. Enter a numeric type value')
      }
    }

    #validateProps(message, key) {
      message = message.toLowerCase()
      key = Number.parseInt(key)
      this.#validateMessage(message)
      this.#validateKey(key)
      return [message, key]
    }

    encrypt (message, key) {
      [message, key] = this.#validateProps(message, key)
      let encryptedMessage = ''
      for (const char of message) {
        let newChar = char
        const charIndexAtAlphabet = this.#alphabet.indexOf(char)
        if (charIndexAtAlphabet >= 0) {
          newChar = this.#alphabet.charAt((charIndexAtAlphabet + key) % this.#module)
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
