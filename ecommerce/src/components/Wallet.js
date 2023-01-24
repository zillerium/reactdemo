import {useEffect, useState, useContext } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ReactPlayer from 'react-player';
import ConnectWallet from './ConnectWallet';
import DeployContract from './DeployContract';
import ApproveContract from './ApproveContract';
import PayContract from './PayContract';
import ApproveEscrowContract from './ApproveEscrowContract';
import PaySeller from './PaySeller';


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
  	  <div className="col-md-4 col-sm-6 text-center">
	{ connectWallet && <ConnectWallet />	}
	{ !connectWallet && <Button variant="secondary" disabled>Connect Wallet</Button>	}
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
      </div>      	
        </ContractContext.Provider>
  </div>
);


}

export default Wallet;

	





