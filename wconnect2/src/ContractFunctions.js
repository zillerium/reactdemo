import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  ContractFactory, utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSigner, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork, useContract, useProvider} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode1 from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'

function ContractFunctions(props) {
	const {network, contractAddress, setContractAddress} = useContext(NetworkContext);
const [balance, setBalance] = useState(0);
	console.log("jjjjjjjjjjjjjjjjjjjj");
	console.log(network);
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
        const contract = useContract(contractAddress);
        //const provider = new ethers.providers.JsonRpcProvider(network.chain.rpcUrls.default.http[0]);
	const getBalance= async ()=> {
                 const balance = await contract.getContractBalance();
		setBalance(balance);
   

	}


    return (
        <>
	    <div>
                <button onClick={getBalance}>get contract balance</button>
	    </div>
	    <div>
	      
	    </div>
   <h1> contract balance =  {balance} at address {contractAddress}</h1>
        </>
    )





}

export default ContractFunctions;
