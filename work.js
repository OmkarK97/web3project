const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { sha256 } = require("ethereum-cryptography/sha256");
const { keccak } = require("ethereum-cryptography/keccak");

let mybal;
let accounts = {
    f9b0b3fbc6a420cf23231c9243870ac50c26aa9bffa8152aec708019e7e26fbd  : 100
}


const private = secp.utils.randomPrivateKey();
console.log("Private Key: ", toHex(private));

const shaofp = toHex(sha256(private));
console.log("sha256  " , shaofp);

const publicKey =  secp.getPublicKey(private);
console.log(toHex(publicKey.slice(1)).slice(-20));


function mybutton() {
    let pass = prompt("Enter your hash Key");
    if ( pass === f9b0b3fbc6a420cf23231c9243870ac50c26aa9bffa8152aec708019e7e26fbd){
        alert("accounts")
    }
}

function checkbal() {
  
}