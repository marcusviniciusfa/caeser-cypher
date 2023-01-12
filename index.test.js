const { CaeserCypher } = require('./index')
const caeserCypher = new CaeserCypher()

describe('', () => {
  it('should be able to encrypt a message', () => {
    const message = 'helloworld'
    const key = 5
    const encryptedMessage = caeserCypher.encrypt(message, key)
    console.log(`Mensagem criptografada: ${message} => ${encryptedMessage}`)
    expect(encryptedMessage).toBe('mjqqtbtwqi')
  })

  it('should be able to decrypt a message', () => {
    const encryptedMessage = 'mjqqtbtwqi'
    const key = 5
    const message = caeserCypher.decrypt(encryptedMessage, key)
    console.log(`Mensagem descriptografada: ${encryptedMessage} => ${message}`)
    expect(message).toBe('helloworld')
  })

  it('should be able throw exception if message contains numerical values', () => {
    const message = 'helloworld123'
    const key = 5
    expect(() => caeserCypher.encrypt(message, key))
      .toThrow('❌ "message" argument is not a valid. Enter only alphabetic characters')
  })

  it('should be able to throw exception if message contains special characters', () => {
    const message = 'helloworld!@#'
    const key = 5
    expect(() => caeserCypher.encrypt(message, key))
      .toThrow('❌ "message" argument is not a valid. Enter only alphabetic characters')
  })

  it('should be able to throw exception if message contains spaces', () => {
    const message = 'hello world'
    const key = 5
    expect(() => caeserCypher.encrypt(message, key))
      .toThrow('❌ "message" argument is not a valid. Enter only alphabetic characters')
  })

  it('should be able to throw exception if key contains no numeric values', () => {
    const message = 'helloworld'
    const key = 'a'
    expect(() => caeserCypher.encrypt(message, key))
      .toThrow('❌ "key" argument is not a valid. Enter a numeric type value')
  })
})
