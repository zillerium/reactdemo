import {useEffect, useState } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';

function Wallet() {
const	[signClient, setSignClient] = useState();
const	[web3Modal, setWeb3Modal] = useState();
const	[test, setTest1] = useState();
const	[sessions, setSessions] = useState([]);
const	[accounts, setAccounts] = useState([]);
const	[txhash, setTxhash] = useState([]);

const cart = useContext(CartContext);

const createWeb3Modal =  () => {
        console.log("111111");
   const web3Modal1 =  new Web3Modal({
                projectId: process.env.REACT_APP_PROJECT_ID,
        standaloneChains:[ "eip155:5"]
   })
	setTest1("mmmm");
        console.log("2222222111111");
        console.log(test);
        console.log(web3Modal1);
   setWeb3Modal(web3Modal1);
        console.log("333333333333333332222222111111");
        console.log(web3Modal1);
        console.log("444444444333333333333333332222222111111");
        console.log(web3Modal);

}

useEffect(()=>{

cart.createWeb3Modal();

console.log("modalxxyy -------------------");
console.log(cart)
console.log(cart.web3Modal)
console.log("modalxxyy 1-------------------");
}, [cart.web3Model])



 const createClient = async () => {
	 console.log("create client ===================");
	 console.log("create client ===================");
	 console.log("create client ===================");
	await cart.createClient();
console.log("cart in wallet 000000");
console.log(cart)
console.log("cart in wallet 999000000");
 }


	const readWeb3Modal = () => {
console.log("modalxx -------------------");
console.log(cart)
console.log(cart.web3Modal)
console.log("modalxx 1-------------------");
	}

	const createWeb3Modal1 = () => {
setWeb3Modal(cart.createWeb3Modal());
console.log("modal -------------------");
console.log(cart)
console.log(web3Modal)
console.log(cart.web3Modal)
console.log("modal 1-------------------");
	}

 const handleConnect = async () => {
	 console.log("create client ===================");
	 console.log("create client ===================");
	 console.log("create client ===================");
	await cart.handleConnect();
console.log("cart in wallet 000000111111");
console.log(cart)
console.log("cart in wallet 9990000001111");
 }


 const handleDisconnect = async () => {
         console.log("create client ===================");
        await cart.handleDisconnect();
console.log("cart in wallet dis 000000111111");
console.log(cart)
console.log("cart in wallet dis 9990000001111");
 }


const handleSend=async()=> {
        try {
const tx =
  {
    from:cart.accounts,
    to: "0x846799Ed461091F982d52FB2f7812913c8E90B01",
    data: "0x",
    gasPrice: "0x029104e28c",
    gasLimit: "0x5208",
    value: "0x00",
  };
                console.log(tx);
   const res = await cart.signClient.request({
topic:cart.sessions.topic,
    request: {
       method:"eth_sendTransaction",
params: [tx]
    },
           chainId: "eip155:5",
   });
                setTxhash(res);
                console.log(res);

        } catch(e) {
            console.log(e);
        }

}

  return (
    <div className="App">
	  <h1>Wallets</h1>
	  <div>
	  <p>Sign client = {cart.signClient && cart.signClient.opts.projectId}</p>
<button onClick={createClient} disabled={cart.signClient}>Create Client</button>
<button onClick={handleDisconnect} >Disconnect</button>

<button onClick={handleConnect}  >Connect</button>
<button onClick={handleSend}> Pay</button>
	  </div>
	  <div>
	 {txhash}
	  </div>

    </div>
  );
}

export default Wallet;

