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
	const network = useContext(NetworkContext);

	console.log("jjjjjjjjjjjjjjjjjjjj");
	console.log(network);
	const [contractAddress, setContractAddress]=useState();
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
	console.log(bytecode1)
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
   	    const contract = await contractFactory.deploy(payee, notary, saleRelease, disputeRelease);

	    console.log("cccccontract")
	    console.log(contract)
	    console.log(contract.address)
	}


    return (
        <>
            <button onClick={HandleDeploy}>Deploy</button>
        </>
    )





}

export default DeployContract;
