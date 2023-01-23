import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  ContractFactory, utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSigner, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork, useContract, useProvider, useContractRead, useContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode1 from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'

function BuyerSettle() {
	const {network, contractAddress, setContractAddress} = useContext(NetworkContext);

		const {data, isError, isLoading, sendTransaction} = useContractWrite({
			address: contractAddress,
			abi: abi,
	                functionName: 'settlement',
		})
	if (isError) {
             return <div>Error in contract {data}</div>
	}
	if (isLoading) {
            return <div>Loading ...</div>
	}
	console.log(data)



    return (
        <>
	      
   <p>settlement =   at address {contractAddress}</p>
        </>
    )





}

export default BuyerSettle;
