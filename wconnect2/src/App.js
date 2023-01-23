import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import {useContext, useState} from 'react'
import { parseEther} from 'ethers/lib/utils.js';
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import Pay from './Pay'
import Profile from './Profile'
import {NetworkContext} from './context'
import { publicProvider } from 'wagmi/providers/public';

function App() {

	console.log("chain")
        console.log(goerli);
//	const chains = [goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet];
//	const chains = [polygonMumbai];
	console.log(polygonMumbai);
//	const {provider} = configureChains(chains, [
//		walletConnectProvider({projectId: "18cf63f918c9aebd18567aabc841a68a"}), 
//	]);
	const { chains, provider, webSocketProvider } = configureChains(
                 [polygonMumbai, goerli, avalanche],
                 [publicProvider()],
              )
	console.log(provider);

	const client=createClient({
            autoConnect: true,
		connectors: modalConnectors({appName: "web3Modal", chains}),
		provider,
	});

//	const client = createClient({
 //             autoConnect: true,
 //             provider,
 //             webSocketProvider,
 //       })


/*	const aEthereumClient = new EthereumClient(wagmiClient, chains);
        const {chain} = useNetwork();
	const n1 = useNetwork();
	console.log("*************************************** network 1");
	console.log(n1);
	console.log("provider ", provider);
	//provider.getChainId().then(network=>{console.log(network)});
	//provider.getChainId().then(network=>{console.log(network)});
        const {isConnected, address} = useAccount()
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
	
	async function connectWallet() {
	}
	*/
	const aEthereumClient = new EthereumClient(client, chains);
        const {isConnected, address} = useAccount()
   const {chain} = useNetwork();
   const network = useNetwork();
	console.log("chain--")
	console.log(chain)
	console.log("network--")
	console.log(network)
	const [contractAddress, setContractAddress]=useState(null);
	const [erc20ContractAddress, setERC20ContractAddress]=useState(null);
	const [paymentAmount, setPaymentAmount]=useState(0);

  return (
    <div className="App">
      <header className="App-header">
	  <WagmiConfig client={client}>
	            <div>
             <Web3Modal projectId= "18cf63f918c9aebd18567aabc841a68a"
                  theme="dark"
          accentColor="default"
          ethereumClient={aEthereumClient}/>
          </div>
<div>
             <Web3Button></Web3Button>
          </div>
    <div>
                {isConnected ? <>Address: {address}</>:<>User not connected</>}
           </div>
           <div>
               {chain && <div>Network - {chain.name}</div>}
           </div>
	  <NetworkContext.Provider value={{network, paymentAmount, setPaymentAmount, erc20ContractAddress, setERC20ContractAddress, contractAddress, setContractAddress}} >
         	  <Pay isConnected={isConnected} address={address}/>
           </NetworkContext.Provider>
	  </WagmiConfig>
      </header>
    </div>
  );
}

export default App;
