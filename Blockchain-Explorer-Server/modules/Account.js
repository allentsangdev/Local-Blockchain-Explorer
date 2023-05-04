// importing the RPC Server endpoint from config file
const RPC = require('../config')

// return the addresses of the node controls
async function getAddress() {
  const Web3 = require('web3')
  const web3  = new Web3(RPC)
  const addresses = await web3.eth.getAccounts()
 return addresses
};

// return the balance of a address in WEI
async function getBalance(address) {
  const Web3 = require('web3')
  const web3  = new Web3(RPC)
  const balance = await web3.eth.getBalance(address)
  const accountBalanceObj = {
    account: address,
    balance: balance
  }
  return accountBalanceObj
}   
	
module.exports = {
	getAddress,
  getBalance
}