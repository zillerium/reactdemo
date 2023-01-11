import {useEffect, useState } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';
import Wallet from '../components/Wallet';
import axios from 'axios';

function Pay() {

const cart = useContext(CartContext);


  return (
    <div className="App">
	  <h1>Pay</h1>
<Wallet />
    </div>
  );
}

export default Pay;

