import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";

const web3Modal = new Web3Modal({
                projectId: process.env.REACT_APP_PROJECT_ID,
	standaloneChains:[ "eip155:5"]
})
function App() {
const	[signClient, setSignClient] = useState();
const	[sessions, setSessions] = useState([]);
const	[accounts, setAccounts] = useState([]);
const	[txhash, setTxhash] = useState([]);


const createClient = async () => {

	try {
           const client = await SignClient.init({
                projectId: process.env.REACT_APP_PROJECT_ID
	   })
	   console.log(client);
		setSignClient(client);
		await subscribeToEvents(client);
	} catch (e) {
           console.log(e);
	}


}


const handleConnect = async()=> {
	if (!signClient) throw Error("cannot connect - sign client is unconnected");
	try {
           const proposalNamespace = {
               eip155: {
		       chains: ["eip155:5"],
		       methods: ["eth_sendTransaction"],
		       events: ["connect", "disconnect"]
	       }
	   };
		const {uri, approval}  = await signClient.connect({
                   requiredNamespaces: proposalNamespace
		})
		console.log('uri', uri);
		if (uri){
                    web3Modal.openModal({uri})
			const sessionNamespace = await approval()
	            console.log(sessionNamespace);
			onSessionConnect(sessionNamespace);
			web3Modal.closeModal();
		}
	} catch (e) {
            console.log(e);
	}

}

const onSessionConnect=async(session) => {

	if (!session) throw Error("no session");
	try {
            setSessions(session);
		setAccounts(session.namespaces.eip155.accounts[0].slice(9));
	} catch(e) {
           console.log(e);
	}

}

const handleDisconnect=async()=>{
  try {
    await signClient.disconnect({
       topic: sessions.topic,
	    code: 6000,
	    message: "user disconnected"
    });
	  reset();
  } catch(e) {

  }
}

const reset=()=> {
  setAccounts([]);
  setSessions([]);
}

const subscribeToEvents = async (client) => {
    if (!client) throw Error("no client");
	try {
           client.on("session_delete", ()=>{
               console.log("user disconnected their wallet session");
		reset();
	   })
	} catch(e) {
 console.log(e);
	}

}

const handleSend=async()=> {
	try {
const tx =
  {
    from: accounts,
    to: "0x846799Ed461091F982d52FB2f7812913c8E90B01",
    data: "0x",
    gasPrice: "0x029104e28c",
    gasLimit: "0x5208",
    value: "0x00",
  };
   const res = await signClient.request({
topic:sessions.topic,
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


     useEffect(()=>{ 
	     if (!signClient) createClient();

     }, [signClient]);
  return (
    <div className="App">
	  <h1>demo</h1>
	  {(accounts && accounts.length>0) ? <><p>{accounts}</p>
          <button onClick={handleDisconnect} disabled={!signClient}>Disconnect</button>
          <button onClick={handleSend} disabled={!signClient}>Send</button>
</>
		  : 
          <button onClick={handleConnect} disabled={!signClient}>Connect</button>


	  }
	  {txhash}
    </div>
  );
}

export default App;
