import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  ContractFactory, utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSigner, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork, useContract, useProvider, useContractRead} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode1 from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'
import GetBalance from './GetBalance'
import BuyerSettle from './BuyerSettle'
import ApproveContract from './ApproveContract'
import ApproveContractTransfer from './ApproveContractTransfer'
import PayContract from './PayContract'
import PaySeller from './PaySeller'

function ContractFunctions(props) {
	const {network, contractAddress, setContractAddress} = useContext(NetworkContext);
const [showBalance, setShowBalance] = useState(false);
const [settleContract, setSettleContract] = useState(false);
const [approveContract, setApproveContract] = useState(false);
const [approveContractPay, setApproveContractPay] = useState(false);
const [payContract, setPayContract] = useState(false);
const [paySeller, setPaySeller] = useState(false);
	console.log("jjjjjjjjjjjjjjjjjjjj");
	console.log(contractAddress);
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
                // const contract = useContract(contractAddress);
	//console.log(contract)
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
        //const provider = new ethers.providers.JsonRpcProvider(network.chain.rpcUrls.default.http[0]);


    return (
        <>
	    <h1>Perform Contract Functions</h1>
	    <div>
                <button onClick={()=>setShowBalance(true)}>get ether contract balance</button>
                <button onClick={()=>setShowBalance(false)}>reset get ether contract balance</button>
                <button onClick={()=>setSettleContract(true)}>show settle ether Contract</button>
                <button onClick={()=>setSettleContract(false)}>reset show ether settle Contract</button>
                <button onClick={()=>setApproveContract(true)}>show approve erc20 amount Contract</button>
                <button onClick={()=>setApproveContract(false)}>reset approve erc20 amount Contract</button>
                <button onClick={()=>setPayContract(true)}>show pay erc20 amount Contract</button>
                <button onClick={()=>setPayContract(false)}>reset pay erc20 amount Contract</button>
                <button onClick={()=>setPaySeller(true)}>show pay seller  erc20 amount </button>
                <button onClick={()=>setPaySeller(false)}>reset pay sellr erc20 amount </button>
                <button onClick={()=>setApproveContractPay(true)}>show approve pay from erc20 contract </button>
                <button onClick={()=>setApproveContractPay(false)}>reset approve pay from contract erc20 </button>
	    </div>
	    <div>
	    {showBalance && <GetBalance />} 
	    </div>
	    <div>
	    {settleContract && <BuyerSettle />} 
	    </div>
	    <div>
	    {approveContract && <ApproveContract />} 
	    </div>
	    <div>
	    {payContract && <PayContract />} 
	    </div>
	    <div>
	    {paySeller && <PaySeller />} 
	    </div>
	    <div>
	    {approveContractPay && <ApproveContractTransfer />} 
	    </div>
        </>
    )





}

export default ContractFunctions;
