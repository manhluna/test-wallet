var bitcoreExplorers = require("bitcore-explorers");
var insight = new bitcoreExplorers.Insight();

function balance(address,ret){
  insight.getUnspentUtxos(address, (err, utxos)=> {
    if (err) {
      //balance(address,ret);
      console.log('err');
    }
    else {
      let balance = 0;
      for (var i = 0; i < utxos.length; i++) {
        balance +=utxos[i]['satoshis'];
      }
      ret(balance);
    } 
  });
}
balance('1HkGqgQBQ6rbYrD9J3sp9xeTEZawWttFXq',(sts)=>{
  console.log(sts);
})