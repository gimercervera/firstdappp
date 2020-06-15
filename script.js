//To execute: exec ./script.js
const artifacts = require('./build/contracts/Dapp.json');
const contract = require('truffle-contract');
const MyContract = contract(artifacts);

MyContract.setProvider(web3.currentProvider);

module.exports = function(callback){
	/*1. Obtain the second account using web3 library*/
	web3.eth.getAccounts((err, accounts) => {
		account0 = accounts[1]; 
		console.log("Second account: " + accounts[1]);
	});

	//2. Using promises, in one sentence obtain the contract instance and return the contract owner.
	MyContract.deployed()
	.then( instance => instance.getSender.call((err,address) => {
		console.log("Sender's function: " + address)
	})
	.catch(err =>{ 
		console.log(err)}
	));

    //3. Using the variable's getter.
	MyContract.deployed()
	.then( instance => instance.sender((err,result) => {
		console.log("Sender's address public variable: " + result);
	})
	.catch(err =>{ 
		console.log(err)}
	));

    //3. Using the variable's getter and getting the mapping value
	async function f(){
		try {
			let instance = await MyContract.deployed();
			let result = await instance.sender();
			let value = await instance.senderValue(result);

			console.log("Asynchronous sender's function: " + result);
			console.log("Sender value: " + value);
		} catch{
			alert(err);
		}
	}
	
	f();

}

