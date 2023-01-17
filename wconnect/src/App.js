import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';

import {WagmiConfig, goerli, mainnet, useAccount, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import Pay from './Pay'

function App() {

	console.log("chain")
        console.log(goerli);
	const chains = [goerli, mainnet];
	const {provider} = configureChains(chains, [
		walletConnectProvider({projectId: "18cf63f918c9aebd18567aabc841a68a"}), ]);
	console.log(provider);

	const wagmiClient=createClient({
            autoConnect: true,
		connectors: modalConnectors({appName: "web3Modal", chains}),
		provider,
	});


	const aEthereumClient = new EthereumClient(wagmiClient, chains);
        const {chain} = useNetwork();
        const {isConnected, address} = useAccount()
	// REACT_APP_PROJECT_ID=18cf63f918c9aebd18567aabc841a68a
	
	async function connectWallet() {
	}
  return (
    <div className="App">
      <header className="App-header">
	  <WagmiConfig client={wagmiClient}>
           <h1>Web3modal</h1>
	   <button onClick={connectWallet} >Connect</button>
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
	  <Pay isConnected={isConnected}/>
	  </WagmiConfig>
      </header>
    </div>
  );
}

export default App;
