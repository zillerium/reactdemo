import {useEffect, useState, useContext } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ReactPlayer from 'react-player';
import DeployContract from './DeployContract';
import ApproveContract from './ApproveContract';
import PayContract from './PayContract';
import ApproveEscrowContract from './ApproveEscrowContract';
import PaySeller from './PaySeller';

import {Web3Modal, Web3Button} from '@web3modal/react';
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,configureChains, createClient, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';


function Wallet() {
        const   [connectWallet, setConnectWallet] = useState(true);
        const   [deployContract, setDeployContract] = useState(false);
        const   [approveContract, setApproveContract] = useState(false);
        const   [payContract, setPayContract] = useState(false);
        const   [approveEscrowContract, setApproveEscrowContract] = useState(false);
        const   [paySeller, setPaySeller] = useState(false);
        const   [networkConnected, setNetworkConnected] = useState();
        const   [paymentAmount, setPaymentAmount] = useState();
        const   [erc20ContractAddress, setERC20ContractAddress] = useState();
        const   [contractAddress, setContractAddress] = useState();
        const   [address, setAddress] = useState();
        const   [isConnected, setIsConnected] = useState();

        const cart = useContext(CartContext);

	const { chains, provider, webSocketProvider } = configureChains(
                 [polygonMumbai, goerli, avalanche],
                 [publicProvider()],
              )
        const client=createClient({
            autoConnect: true,
                connectors: modalConnectors({appName: "web3Modal", chains}),
                provider,
        });

        const aEthereumClient = new EthereumClient(client, chains);
        const {isConnected: isConnectedAccount, address: addressAccount} = useAccount()
        const {chain} = useNetwork();
        const network = useNetwork();

    useEffect(()=>{
	if (networkConnected != network) setNetworkConnected(network);
	if (isConnected != isConnectedAccount) setIsConnected(isConnectedAccount);
	if (addressAccount != address) setAddress(addressAccount);
        setDeployContract(true);
    },[]);
return (
  <div className="container">
	<ContractContext.Provider value={{connectWallet, setConnectWallet, 
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
	}}>

      <div className="row">

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
                {isConnectedAccount ? <>Address: {addressAccount}</>:<>User not connected</>}
           </div>
           <div>
               {chain && <div>Network - {chain.name}</div>}
           </div>


  	  <div className="col-md-4 col-sm-6 text-center">
	{ deployContract && <DeployContract />	}
	{ !deployContract && <Button variant="secondary" disabled>Deploy Contract</Button>	}
	{ approveContract && <ApproveContract />	}
	{ !approveContract && <Button variant="secondary" disabled>Approve Contract</Button>	}
	{ payContract && <PayContract />	}
	{ !payContract && <Button variant="secondary" disabled>Pay Contract</Button>	}
	{ approveEscrowContract && <ApproveEscrowContract />	}
	{ !approveEscrowContract && <Button variant="secondary" disabled>Approve Escrow Contract</Button>	}
	{ paySeller && <PaySeller />	}
	{ !paySeller & <Button variant="secondary" disabled>Pay Seller</Button>	}
	</div>
          </WagmiConfig>


      </div>      	
        </ContractContext.Provider>
  </div>
);


}

export default Wallet;

	





