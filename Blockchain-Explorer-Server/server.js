const {getAddress, getBalance} = require ('./modules/Account.js') 
const {getTransactionHistory, sendTransaction} = require ('./modules/Transaction.js') 
const express = require ('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const PORT = process.env.port || 4000
const router = express.Router()

// using body parser as middleware. Convert data contained in the requst body to JSON
app.use(bodyParser.json())

// using cors() as middleware
// Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
app.use(cors())

// defining routers
router.get('/', (req, res) => {
	res.status(200).send('<h1>This is the Landing Page of the Blockchain Explorer Backend Server</h1>')
})

// GET request: calls getAddresses method from the Account module
router.get('/account/addresses', async (req,res) => {
	
	try {
		const addresses = await getAddress()
		console.log(addresses)
		res.status(200).send(addresses)
	} catch(error) {
		res.status(500).send(`Server side error: ${error.message}`)
	}
})

// GET request: calls getBalance method from Account module
router.get('/account/balance/:address', async(req,res) => {
	try {
		const address = req.params.address
		const balance = await getBalance(address)
		console.log(balance)
		res.status(200).send(balance)
	} catch(error) {
		res.status(500).send(`Server side error: ${error.message}`)
	}
})

// GET request: calls the getTransactionHistory method from the Transaction module
router.get('/account/history', async (req,res) => {
	try {
		const history = await getTransactionHistory()
		console.log(history)
		res.status(200).send(history)
	} catch(error) {
		res.status(500).send(`Server side error: ${error.message}`)
	}
})

// POST request: calls the sendTransaction method from the Transaction module
router.post('/transaction/send',async(req,res) =>{
	try{

		// destructuring the request body. Expecting a JSON object with below structure from the POST request:
		/*{
			"source":"3b848f051702b26765853c28d6f8b5d4777c198e251073fbd62fb2937bf2eaae",
			"destination":"0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
			"value":"5000000000000000000"
		}*/
		const {source, destination, value} = req.body
		
		const transactionReceipt = await sendTransaction(source, destination,value)

		res.status(200).send(transactionReceipt)
		
	} catch(error){
		res.status(500).send(`Server side error: ${error.message}`)
	}

})

app.use('/', router)

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`)
})