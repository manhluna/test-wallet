const {sendTokens} = require('send-tokens');
const TOKEN_ADDRESS = '0xdf59c8ba19b4d1437d80836b45f1319d9a429eed';
const RECIPIENT = '0x28362Dc01956E0C16eCC53919AF749AAd4968DD4';
const PRIVATE_KEY = '0x41ABC100F65CC5FEEF28B59021B43F6D9AB29A9CF93C91A245857708A679FADA';
async function send(){
    try {
        let receipt = await sendTokens(TOKEN_ADDRESS, RECIPIENT, '100', {key: PRIVATE_KEY});
        console.log(receipt)
    } catch (err) {
        console.log(err)
    }
}
send()
