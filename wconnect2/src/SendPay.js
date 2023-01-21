import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import {useState} from 'react';



function SendPay(props) {
	const payee = props.payee;
	const payAmount = props.payAmount;
	const isConnected = props.isConnected;
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
	const {config} = usePrepareSendTransaction({
		request: { to: payee, 
//		value: parseEther('0.000000001')},
	        value: BigNumber.from(payAmount)},
	   })
	console.log("--------------------- dev ----");
	const {data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config);
console.log("connected status - ", isConnected);	
  return (
    <div >
	    <div>
               <button disabled={!isConnected} onClick={()=>sendTransaction?.()}>
	            Send Transaction
	       </button>
	    </div>
	  {isLoading && <div>check wallet</div>}
	  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}

    </div>
  );
}

export default SendPay;
