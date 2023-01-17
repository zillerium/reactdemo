import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';

import {WagmiConfig, goerli, mainnet, useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"


function Pay(props) {

	const isConnected = props.isConnected;
	console.log("chain")

	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
	const {config} = usePrepareSendTransaction({
		request: { to: '0x846799Ed461091F982d52FB2f7812913c8E90B01', 
//		value: parseEther('0.000000001')},
	        value: BigNumber.from('10000')},
	   })
	const {data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config);
console.log("connected status - ", isConnected);	
  return (
    <div >
           <h1>Pay</h1>
	  <div>
	    <div>
               <button disabled={!isConnected} onClick={()=>sendTransaction?.()}>
	            Send Transaction
	       </button>
	    </div>
	  {isLoading && <div>check wallet</div>}
	  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
	  </div>

    </div>
  );
}

export default Pay;
