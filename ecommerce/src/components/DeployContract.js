import {Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
	configureChains, createClient, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'

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
                isConnected, setIsConnected } = useContext(ContractContext);

	console.log("user address =");
	console.log(address);
	const notaries = [{address:'0x9f0BEA7dE67e8Fb333067ed83b468E5082280835'}];
        const [notary, setNotary]=useState({address:''});
	console.log("select notary0000000000000000000000000000000000000000000000000", notary);
//	setNotary(notaries[0]);
  return (
    <div >
	  <h1>Deploy Contract</h1>
	  <div>Notary</div>
          <div>
               <select className="custom-select form-control" 
	             value={notary.address} onChange={e=>setNotary(notaries.find(n=>n.address===e.target.value))}>
                    {notaries.map(n => (
                        <option key={n.address} value={n.address} >{n.address}</option>
		    ))}

	       </select>
	  </div>
    </div>
  );
}

export default DeployContract;
