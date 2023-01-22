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
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'

function DeployContract(props) {
	const [contractAddress, setContractAddress]=useState();
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a

// Connect to WalletConnect

	// Connect to WalletConnect
const web3Modal = new Web3Modal({
  network: 'polygonMumbai',
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: '7fc0e20266514513b0b02d94a2343e54'
      }
    }
  }
});

const deployContract = async() => {
  await web3Modal.connect();

  // Get the current provider
  const provider = await web3Modal.getProvider()

  // Use the provider to interact with the web3
  const web3 = new Web3(provider)

  const contract = new web3.eth.Contract(abi);

  const deployedContract = await contract.deploy({
      data: bytecode,
      arguments: []
    })
    .send({
      from: web3.eth.accounts.wallet[0].address,
      gas: '4700000'
    });

   console.log(deployedContract.options.address);
}

  return (
    <>
	  {(
<div><button onClick={deployContract}>Deploy</button></div>
  )}
	  { console.log(deployedContract.address)}
    </>
  )
}

export default DeployContract;
