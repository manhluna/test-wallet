const FlexContract = require('flex-contract');

const ct = (abi, deployed_at) => {
    return new FlexContract(abi, deployed_at);
}

async function past(contract,from,to,fromBlock,toBlock,fn){
    try {
        fn(await contract.Transfer(
            {
            fromBlock: fromBlock,
            toBlock: toBlock,
            args: {
                'from': from,
                'to': to
                }
            }
        ))
    } catch (err) {
        console.log(err);
    }
}

function live(contract,from,to,fn){
    try {
        let watcher = contract.Transfer.watch({
            args: {
                'from': from,
                'to': to
            }
         });
         watcher.on('data', (event) => {
             fn(event)
             //watcher.close();
         });
    } catch (err) {
        console.log(err);
    }
}

/*
const ABI = require('./MyContract.ABI.json');
const DEPLOYED_AT = "0xdf59c8ba19b4d1437d80836b45f1319d9a429eed";
const contract = new FlexContract(ABI, DEPLOYED_AT);
const from = "0x01F8505B9B33e88c339E02C7338F7d95DDeb1b48";
const to = "0x28362Dc01956E0C16eCC53919AF749AAd4968DD4";
*/