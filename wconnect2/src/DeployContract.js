import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import {useState} from 'react';
import Web3 from 'web3';
import bytecode from './bytecode';
import WalletConnectProvider from '@walletconnect/web3-provider';
import 'readable-stream';


function DeployContract(props) {
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a

	const web3 = new Web3(new WalletConnectProvider({
             infuraId: '7fc0e20266514513b0b02d94a2343e54' // replace with your own Infura ID
        }));

        const encodedArguments = web3.eth.abi.encodeParameters([
		'address payable', 'address', 'uint256', 'uint256'],
		[payee, notary, saleRelease, disputeRelease]);

	const { config } = usePrepareSendTransaction({
            request: {
            data: bytecode + 
		  web3.eth.abi.encodeFunctionSignature('constructor()') + encodedArguments
            },
            });
	
	
	const {data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config);
console.log("connected status - ", isConnected);	
  return (
    <div >
	    <div>
               <button disabled={!isConnected} onClick={()=>sendTransaction?.()}>
	            Deploy Contract
	       </button>
	    </div>
	  {isLoading && <div>check status</div>}
	  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}

    </div>
  );
}

export default DeployContract;
