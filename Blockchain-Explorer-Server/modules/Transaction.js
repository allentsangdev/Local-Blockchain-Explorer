// MongoDB Configuration
const mongoose = require('mongoose')
const dbUri = 'mongodb+srv://allen-admin:test1234@cluster0.bgd3asx.mongodb.net/transaction?retryWrites=true&w=majority'

// Web3.js Configuration
const RPC = require('../config')
const Web3 = require("web3");
let web3 = new Web3(RPC);

// define transaction history data schema
const TransactionSchema = new mongoose.Schema({
    
    transactionHash: String,
    status: String,
    timeStamp: String,
    from: String,
    to: String,
    value: String,
    gasUsed: String
    
})

// define transaction history model
const transactionModel = new mongoose.model('history', TransactionSchema)

// async function to fetch all history document
async function getTransactionHistory() {
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    const history = await transactionModel.find({})
    return history
}

// function for full stack 3 lab test
// _source will be the user's private key
// _destination will be the recipient's public address
// _value will be tranfer amount in WEI
// this function will return the transaction receipt
async function sendTransaction(_source, _destination, _value) {
    
    // Hardcoded Gas Limit
    const signTxnParams = {
    to: _destination,
    value: _value,
    gas: "21000"
    }

    // sign the transaction
    const transactionSignature = await web3.eth.accounts.signTransaction(signTxnParams, _source)

    // send the signed transaction
    const transfer = await web3.eth.sendSignedTransaction(transactionSignature.rawTransaction)

    // saving the transaction receipt to mongodb
    try{
        mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // destructuring the transaction receipt returned from the web3.js send transaction function
        const {transactionHash,status,from,to,gasUsed} = transfer
        const timeStamp = new Date()

        const transaction = new transactionModel({
            transactionHash: transactionHash,
            status: status,
            timeStamp: timeStamp.toLocaleString(),
            from: from,
            to: to,
            value: _value,
            gasUsed: gasUsed
        })

        const saveResult = await transaction.save()

    }catch(error){
        console.log(`MongoDB Error: ${error.message}`)
    }
    
    return transfer
}

module.exports = {
    getTransactionHistory,
    sendTransaction
}