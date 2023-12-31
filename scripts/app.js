const { program } = require('commander');
const { encryptFile, decryptFile, encrypt, decrypt } = require('./utils.js')

let KEY = "root@8911" // default key

program
    .description("encrypts or decrypts a text file using AES algorithm")
    .option("-p <char>", "to provide filepath to encrypt or decrypt a file")
    .option('--encrypt', "encrypts a file or message")
    .option('--decrypt', "decrypts a file or message")
    .option('-m <char>', "message to encrypt or encrypted message to decrypt")
    .option("--key <char>", "key to decrypt the encrypted message")


program.parse();

// node app.js -p ../example.txt --encrypt -> to encrypt file

const options = program.opts();

const filepath = options.p
const encryptEnabled = options.encrypt
const decryptEnabled = options.decrypt

const message = options.m
const key = options.key

if (message) {
    // to encrypt or decrypt the message
    if (key) {
        KEY = key
    }

    if (encryptEnabled && !decryptEnabled) {
        const encryptedMessage = encrypt(message, KEY)
        console.log(`encrypted message: ${encryptedMessage.toString()}`)
        console.log(`encryption key: ${KEY}`)
    }

    else if (decryptEnabled && !encryptEnabled) {
        const decryptedMessage = decrypt(message, KEY)
        if (decryptedMessage) {
            console.log(`decrypted message: ${decryptedMessage}`)
        }

        else {
            console.log("provide a key to decrypt the message")
        }
    }

    else {
        console.log("no operation provided")
    }
}

else if (encryptEnabled && !decryptEnabled) {
    if (key) {
        KEY = key
    }
    if (filepath) {
        encryptFile(filepath, KEY).then(() => {
            console.log("encryption completed...")
        }).catch(err => {
            console.log(`encryption failed:\n${err}`)
        })
    }
    else {
        console.log("error: no filepath provided, use -p flag to specify filepath")
    }
}

else if (decryptEnabled && !encryptEnabled) {
    if (key) {
        KEY = key
    }
    if (filepath) {
        decryptFile(filepath, KEY).then(() => {
            console.log("decryption completed...")
        }).catch(err => {
            console.log(`decryption failed:\n${err}`)
        })
    }
    else {
        console.log("error: no filepath provided, use -p flag to specify filepath")
    }
}


else {
    console.log(`command invalid!`)
}