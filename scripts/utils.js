// AES encryption
const CryptoJS = require("crypto-js");

const fs = require('fs')


function encrypt(data, key) {
    const encrypted = CryptoJS.AES.encrypt(data, key)
    return encrypted
}


function decrypt(encryptedData, key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, key)
    return decrypted.toString(CryptoJS.enc.Utf8)
}


function encryptFile(filepath, key) {
    console.log("Encryption started...")
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            const encrypted = encrypt(data.toString(), key)
            const encryptedData = encrypted.toString()

            fs.writeFile(filepath, encryptedData, (err) => {
                if (err) {
                    reject(`error: ${err}`)
                    return
                }
                // @ts-ignore
                resolve()
            })
        })
    })
}



function decryptFile(filepath, key) {
    console.log("Decryption started...")
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            const decryptedData = decrypt(data.toString(), key)
            fs.writeFile(filepath, decryptedData, (err) => {
                if (err) {
                    reject(`error: ${err}`)
                    return
                }
                // @ts-ignore
                resolve()
            })
        })
    })
}

module.exports = { encryptFile, decryptFile, encrypt, decrypt }