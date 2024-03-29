import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  ContractFactory, utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSigner, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork, useProvider} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode1 from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'

function DeployContract(props) {
	const {network, contractAddress, setContractAddress} = useContext(NetworkContext);
// setContractAddress("0xF");
	console.log(contractAddress);
	console.log("jjjjjjjjjjjjjjjjjjjj");
	console.log(network);
//	const [contractAddress, setContractAddress]=useState();
	const [purchaseAmount, setPurchaseAmount]=useState(0);
	const [existingContractAddress, setExistingContractAddress]=useState(0);
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
//	console.log(bytecode1)
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a

        //const provider = new ethers.providers.JsonRpcProvider(network.chain.rpcUrls.default.http[0]);
        const provider = useProvider();
console.log("provider", provider);
	const {data: signer, isError, isLoading} = useSigner();
console.log("signer", signer);
	const contractFactory = new ethers.ContractFactory(abi, bytecode1, signer);
	const HandleDeploy= async ()=> {
		console.log("c2ontractFactory")
		console.log(contractFactory)
		console.log("purchaseAmount", purchaseAmount);
//		const maticAmount = ethers.utils.parseUnits(purchaseAmount, 18);
		const maticAmount = BigNumber.from(purchaseAmount);
		console.log("matic amount ", maticAmount);
   	    const contract = await contractFactory.deploy(payee, notary, saleRelease, disputeRelease, 
		    {value: maticAmount});

	    console.log("cccccontract")
	    console.log(contract)
	    console.log(contract.address)
//		setContractAddress(contract.address);
	   setContractAddress(contract.address);
	}


    return (
        <>
	    <h1>Deploy New Contract</h1>
	    <div>
                <button onClick={HandleDeploy}>Deploy</button>
	    </div>
	    <div>
                <input placeholder="purchase amount" type="text" onChange={(e)=>setPurchaseAmount(e.target.value)} />
	      
	    </div>
   <p> Purchased Amount  {purchaseAmount}</p>
	    <h1>Existing Contract</h1>
	    <div>
                <button onClick={()=>setContractAddress(existingContractAddress)}>Save Contract Address</button>
	    </div>
	    <div>
                <input placeholder="contract address" type="text" onChange={(e)=>setExistingContractAddress(e.target.value)} />
	    </div>
        </>
    )





}

export default DeployContract;
