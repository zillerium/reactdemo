const abi = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_seller",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_notary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_saleRelease",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_disputeRelease",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "defaultDisputeSettlement",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dispute",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disputeRelease",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "paySeller",
				"type": "bool"
			}
		],
		"name": "disputeSettlement",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "raiseDispute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleRelease",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleSettlement",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "settlement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export default abi;
