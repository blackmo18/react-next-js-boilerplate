const CryptoJs = require('crypto-js')

export default class Encryption {
    static textEncrypt(value: string, pass: string): string {
        return  CryptoJs.AES.encrypt(value, pass).toString()
    }

    static textDycrypt(value: string, pass: string): string {
        const origValue = CryptoJs.AES.decrypt(value, pass).toString(CryptoJs.enc.Utf8)
        return origValue.toString(CryptoJs.enc.Utf8)
    }
}