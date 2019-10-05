const FlexEther = require('flex-ether');
const eth = new FlexEther();

async function balance(addr, fn){
    fn(await eth.getBalance(addr))
}

async function send(key,addr,amount,fn){
    try {
        fn(await eth.transfer(addr, amount,{key: key}).confirmed(2))
    } catch(err) {
        console.log(err)
    }
}
