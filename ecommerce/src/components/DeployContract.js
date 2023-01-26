import {Web3Button} from '@web3modal/react';
import {useContext, useEffect, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
	configureChains, createClient,useSigner, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import Notary from './Notary'
import {ethers, ContractFactory, utils, BigNumber} from 'ethers';
import bytecode1 from './bytecode';
import abi from './abi';
import {CartContext} from '../CartContext';
function DeployContract() {

 const  {connectWallet, setConnectWallet,
                deployContract, setDeployContract, 
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                networkConnected, setNetworkConnected,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                address, setAddress,
                isConnected, setIsConnected,
	        contractDetails, setContractDetails,
                notary, setNotary
                } = useContext(ContractContext);
        const cart = useContext(CartContext);
	const payee = cart.seller;
	const title = cart.title;
	const items = cart.items;
	const sellers = items.reduce((acc, curr) => {
  if(!acc[curr.seller]) {
    acc[curr.seller] = {
      seller: curr.seller,
      totalAmount: curr.price * curr.quantity
    }
  } else {
    acc[curr.seller].totalAmount += curr.price * curr.quantity
  }
  return acc
}, {})
	    console.log(items);
	    console.log(sellers);
	    console.log("payee2 = ", payee);
	    console.log("title2 = ", title);
        const purchaseAmount = cart.getTotalCost();
//	const [notary, setNotary]=useState({address: ''});
        const salesRelease = Math.floor(Date.now() / 1000);
        const disputeRelease = salesRelease + 100; // 100 secs for testing

        const {data: signer, isError, isLoading} = useSigner({
             onError(error) {
		     console.log('error', error)
	     },
	})


        if (isLoading) return (<h1>loading ...</h1>); else console.log("signer", signer);
        if (isError) console.log("error == ");
        const contractFactory = new ethers.ContractFactory(abi, bytecode1, signer);
console.log(contractFactory)
	console.log("deploy contract user address ===========================");
	console.log(address);
  //  useEffect(()=>{
//	console.log("deploy contract notary *****************************************");
//	console.log(notary);
 //   },[notary]);

    const HandleDeploy= async ()=> {
	    console.log("button cliecked ============================");
	    console.log("payee = ", payee);
	    console.log("title = ", title);
	    console.log("sellers============================================ = ", sellers);
	    console.log("notary = ", notary, sellers, Object.keys(sellers));
       //     const maticAmount = BigNumber.from(purchaseAmount);
         //   const contract = await contractFactory.deploy(payee, notary, salesRelease, disputeRelease,
           //         {value: maticAmount});
         //   const contracts = await Promise.all(Object.keys(sellers).forEach(sellerAddress => {
	  var thisSeller = '';
          let arrayContracts=[];
	  try {
            const contract = await (Object.keys(sellers).map(async sellerAddress => {
                 const aSeller = sellers[sellerAddress];
	//	  thisSeller = aSeller.seller;
		   const contractDetails1 = {seller: aSeller.seller, totalAmount: aSeller.totalAmount, 
			   notary: notary.address, buyer:address, contractAddress: '0x0'};
	//	   console.log(aSeller);
		   arrayContracts.push(contractDetails1);  
		  //  console.log(maticAmount, aSeller.seller, notary.address, salesRelease, disputeRelease);
                //    await contractFactory.deploy(sellers[sellerAddress].seller, notary.address, salesRelease, disputeRelease);
                 //  {value: maticAmount});
             }))
//		  console.log(contract);
//		  console.log("contract address *********************", contract.address);
//		  setERC20ContractAddress(contract.address);
//		  setApproveContract(true);
//		  setDeployContract(false);
	//	  const contractresolved = await Promise.all(contract);
          } catch (error) {
             console.log(error);
	  }
             for (let i=0;i<arrayContracts.length; i++) { 
		     console.log("vars -----");
		     console.log(arrayContracts[i].seller);
		     console.log(notary.address);
		     console.log(contractFactory);
		    
	          const contract = await contractFactory.deploy(arrayContracts[i].seller, notary.address, salesRelease, disputeRelease);

		  console.log("resolved =====");
		  console.log(contract);
		  if (contract) arrayContracts[i].contractAddress = contract.address;
		  setContractDetails(...contractDetails, arrayContracts[i]);
                  console.log("contract address *********************", contract.address);
                  setERC20ContractAddress(contract.address);
                  setApproveContract(true);
                  setDeployContract(false);

	     }
	     
             console.log("deploy end")
	    console.log(arrayContracts);

           //setContractAddress(contract.address);
        }


	   //<NotaryContext.Provider value={{notary, setNotary}}>
//	setNotary(notaries[0]);
  return (
    <div >

	  <h1>Deploy Contract</h1>
	  <Notary />
	     <button onClick={HandleDeploy}>Deploy</button> 

    </div>
  );
}

export default DeployContract;
