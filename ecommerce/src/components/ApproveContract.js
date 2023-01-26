import {Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
	configureChains, createClient, useNetwork, useConnect, chain, useContractWrite, usePrepareContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import bytecode1 from './bytecode';
import abi from './abi';

function ApproveContract() {

	 const  {
                deployContract, setDeployContract,
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                contractDetails, setContractDetails,
                notary, setNotary
                } = useContext(ContractContext)
// this handles just one seller now, but this should be an array to handle all sellers
  const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
          abi: abi,
          functionName: 'approveContractTransfer',
          args:[paymentAmount]
  })

const {data, isLoading, isSuccess, write} = useContractWrite(config)
	if (isLoading) {
             return <div>Loading ...</div>
	}
	console.log(data)



	return (
    <div >
	  <h1>Approve Contract</h1>
		        <div><button disabled={!write} onClick={()=>write?.()}>Approve contract to pay {paymentAmount}</button></div>
            {error && (<div> error in formatting {error.message} </div>)}
   <div><p>contract approval to pay=   at address {contractAddress}</p></div>

    </div>
  );
}












export default ApproveContract;
