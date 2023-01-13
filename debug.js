const { CaeserCypher } = require('./index')

const caeserCypher = new CaeserCypher()

const message = 'helloworld'
const key = 5
caeserCypher.encrypt(message, key)
