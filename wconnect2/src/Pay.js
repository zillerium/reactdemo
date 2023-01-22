import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import {useState} from 'react';
import SendPay from './SendPay';
import DeployContract from './DeployContract';
import ContractFunctions from './ContractFunctions';

function Pay(props) {
 const [payNow, setPayNow]=useState(false);
 const [payee, setPayee]=useState();
 const [payAmount, setPayAmount]=useState(0);
	const isConnected = props.isConnected;
	const payer = props.address;
	console.log("chain")
console.log("connected status - ", isConnected);	
	const salesRelease = Math.floor(Date.now() / 1000);
	const disputeRelease = salesRelease + 100;
  return (
    <div >
           <h1>Pay</h1>
	  <div>
	    <div>
                  <input type="text" onChange={(e)=>setPayee(e.target.value)} placeholder="payee address"/>
	    </div>
	    <div>
                  <input type="text" onChange={(e)=>setPayAmount(e.target.value)} placeholder="amount to pay"/>
	    </div>
	  <div>
	  <button onClick={(e)=>setPayNow(true)} >Pay Now</button>
	  </div>
	  { payNow && 
	   <SendPay isConnected={isConnected} payee={payee} payAmount={payAmount} />
	  }
	  { payNow &&
           <DeployContract isConnected={isConnected} payee={payee} notary={payer} salesRelease={salesRelease} disputeRelease={disputeRelease} p
ayer={payer}  />
	  }
	  { payNow &&
           <ContractFunctions isConnected={isConnected} payee={payee} notary={payer} salesRelease={salesRelease} disputeRelease={disputeRelease} payer={payer}  />

}


	 <h1> {payNow? "true":"false"}</h1>
	  </div>
    </div>
  );
}

export default Pay;
