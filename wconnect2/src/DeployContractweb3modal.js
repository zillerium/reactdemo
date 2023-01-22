import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'

function DeployContract(props) {
	const network = useContext(NetworkContext)
	console.log("jjjjjjjjjjjjjjjjjjjj");
	console.log(network);
	const [contractAddress, setContractAddress]=useState();
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a

	const contractJson = {
              "contractName": "peacio",
	      "abi": abi,
              "bytecode": bytecode
	}


	const prepareTransaction = usePrepareSendTransaction(network.chain.network, network.chain.id)
    const sendTransaction =  useSendTransaction(network.chain.network, network.chain.id)
    const HandleDeploy = async () => {
        // encode the bytecode
        const encodedBytecode = `0x${contractJson.bytecode}`

        // prepare the transaction
        const transaction = {
            to: null,
            data: encodedBytecode,
            gas: '1000000'
        }

        // send the transaction
        const receipt = await sendTransaction(transaction)
        setContractAddress(receipt.contractAddress)
    }

    return (
        <>
            <button onClick={HandleDeploy}>Deploy</button>
            {contractAddress && <p>Contract deployed at: {contractAddress}</p>}
        </>
    )





}

export default DeployContract;
