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

function DeployContract(props) {
	const [contractAddress, setContractAddress]=useState();
	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
	//
	const walletConnect = new WalletConnect({
               infuraId: '7fc0e20266514513b0b02d94a2343e54'
        })

     const walletConnectConnector = new Web3Modal.connectors.Injected({
        supportedChainIds: [1, 42],
        walletConnect
     })

const deploy = async () => {
    const provider = new ethers.providers.Web3Provider(connector.getProvider())
    const signer = provider.getSigner()
    const contract = new ethers.ContractFactory(
      abi,
      bytecode,
      signer
    )
    const deployment = contract.getDeployTransaction(payee, notary, saleRelease, disputeRelease)
    const deploymentResponse = await signer.sendTransaction(deployment)
    const transactionReceipt = await provider.waitForTransaction(deploymentResponse.hash)
    setContractAddress(transactionReceipt.contractAddress)
  }

  return (
    <>
      <Web3Modal connector={connector}>
        <Web3Button onConnect={() => console.log("Connected")}>
          Connect to Wallet
        </Web3Button>
      </Web3Modal>
      { (
        <button onClick={deploy}>Deploy Contract</button>
      )}
      {contractAddress && (
        <p>Contract deployed at: {contractAddress}</p>
      )}
    </>
  )
}

export default DeployContract;
