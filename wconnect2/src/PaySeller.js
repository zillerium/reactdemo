import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  ContractFactory, utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,   useContractRead, useContractWrite, usePrepareContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode1 from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'

function PaySeller() {
	const {network, paymentAmount, setPaymentAmount, erc20ContractAddress, setERC20ContractAddress, contractAddress, setContractAddress} = useContext(NetworkContext);
console.log("contract address", contractAddress);

  const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
	  abi: abi,
	  functionName: 'settlementUsdc',
  })
console.log(config);
		const {data, isLoading, isSuccess, write} = useContractWrite(config)
	if (isLoading) {
             return <div>Loadiong ...</div>
	}
	console.log(data)



    return (
        <>
	<div><button disabled={!write} onClick={()=>write?.()}>Pay seller amount from contract {paymentAmount}</button></div>
	    {error && (<div> error in formatting {error.message} </div>)}
   <div><p>seller paid =   at address {contractAddress}</p></div>
        </>
    )





}

export default PaySeller;
