import {useEffect, useState } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';
import ReactPlayer from 'react-player';


function Wallet() {
const	[signClient, setSignClient] = useState();
const	[web3Modal, setWeb3Modal] = useState();
const	[test, setTest1] = useState();
const	[sessions, setSessions] = useState([]);
const	[accounts, setAccounts] = useState([]);
const	[txhash, setTxhash] = useState([]);

const cart = useContext(CartContext);

console.log(cart)
console.log(cart.sessions)


const buttonLabels = ['Connect Wallet', 'Deploy Contract', 'Approve Stablecoin Contract', 'Pay Contract', 'Approve Escrow Contract', 'Pay Seller'];

  // State to keep track of the current button
  const [currentButton, setCurrentButton] = useState(1);

  // State to keep track of the message
  const [message, setMessage] = useState('');

  // Event handlers for each button
  const handleConnectWallet = () => {
    // Code for connecting wallet
    setCurrentButton(2);
  };

  const handleDeployContract = () => {
    // Code for deploying contract
    setCurrentButton(3);
  };

  const handleApproveStableCoinContract = () => {
    // Code for approving stablecoin contract
    setCurrentButton(4);
  };

  const handlePayContract = () => {
    // Code for paying contract
    setCurrentButton(5);
  };

  const handleApproveEscrowContract = () => {
    // Code for approving escrow contract
    setCurrentButton(6);
  };

  const handlePaySeller = () => {
    // Code for paying seller
    setMessage('Complete');
  };

  return (
    <div className="container">
      {buttonLabels.map((label, index) => (
        <ButtonRow
          key={label}
          label={label}
          buttonNumber={index + 1}
          currentButton={currentButton}
          handleConnectWallet={handleConnectWallet}
          handleDeployContract={handleDeployContract}
          handleApproveStableCoinContract={handleApproveStableCoinContract}
          handlePayContract={handlePayContract}
          handleApproveEscrowContract={handleApproveEscrowContract}
          handlePaySeller={handlePaySeller}
        />
      ))}
      <p>{message}</p>
    </div>
  );
}

function ButtonRow({ label, buttonNumber, currentButton, handleConnectWallet, handleDeployContract, handleApproveStableCoinContract, handlePayContract, handleApproveEscrowContract, handlePaySeller }) {

  return (
    <div className="row">
      <div className="col-md-4 col-sm-6 text-center">
        <Button
          disabled={currentButton !== buttonNumber}
          variant="default"
          onClick={buttonNumber === 1 ? handleConnectWallet : buttonNumber === 2 ? handleDeployContract : buttonNumber === 3 ? handleApproveStableCoinContract : buttonNumber === 4 ? handlePayContract : buttonNumber === 5 ? handleApproveEscrowContract : handlePaySeller }
        >
          {label}
        </Button>
      </div>
    </div>
  );
}

export default Wallet;

	





