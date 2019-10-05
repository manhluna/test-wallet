const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

function generate(mnemonic,id) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed);
    const child = root.derivePath("m/44'/0'/0'/0/"+id);
    const Address = bitcoin.payments.p2pkh({ pubkey: child.publicKey }).address;
    //console.log("BIP39 Seed:", seed.toString('hex'));
    //console.log("BIP32 Root Key: ", root.toBase58());
    return {Address: Address, PrivateKey: child.toWIF()};
}