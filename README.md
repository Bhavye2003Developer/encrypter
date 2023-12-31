# Command Line Encryption/Decryption Tool

This command line application in Node.js allows you to encrypt and decrypt files or texts using the AES algorithm. It provides a simple and secure way to protect your sensitive information.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    https://github.com/Bhavye2003Developer/encrypter
    ```

2. Install dependencies:

    ```bash
    cd encrypter
    npm install
    ```

## Usage

### Commands

- `--encrypt`: Enables encryption.
- `--decrypt`: Enables decryption.
- `-p <filepath>`: Specifies the file path for encryption or decryption.
- `-m <message>`: Specifies the message for encryption or the encrypted message for decryption.
- `--key <encryption key>`: Specifies the encryption key. (Default key: "root@8911")

### Example Commands

1. Encrypt a file:

    ```bash
    node app.js -p path/to/your/file.txt --encrypt
    ```

2. Decrypt a file:

    ```bash
    node app.js -p path/to/your/file.txt --decrypt
    ```

3. Encrypt a message:

    ```bash
    node app.js -m "Your secret message" --encrypt
    ```

4. Decrypt a message:

    ```bash
    node app.js -m "EncryptedMessageHere" --decrypt --key "your-custom-key"
    ```

### CryptoJS and AES

[CryptoJS](https://cryptojs.gitbook.io/docs/) is a JavaScript library that provides cryptographic functionality, including the AES algorithm. AES (Advanced Encryption Standard) is a widely used symmetric encryption algorithm known for its security and efficiency.

In this application, CryptoJS is used to perform AES encryption and decryption of files or messages.
