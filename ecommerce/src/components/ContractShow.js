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
import {Container, Button, Row, Col, Image, Table} from 'react-bootstrap';

function ContractShow() {

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
console.log("shpw contract details ====");
	console.log(contractDetails);
  return (
    <div >

	  <b> Contract</b>
               <Table stripod  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Seller</th>
                                                      <th>Notary</th>
                                                      <th>Contract</th>
                                                      <th>Amount</th>
                                                 </tr>
                                            </thead>
                                        <tbody>
                        {contractDetails.length>0 && contractDetails.map((value, key) => {
                                return (
                                        <tr>
                                 <td>    {value.seller}  </td>
                                 <td>    {value.notary}  </td>
                                 <td>    {value.contractAddress}  </td>
                                 <td>    ${value.totalAmount?.toFixed(2)}  </td>
                                        </tr>
                                )
                        })}
                                       </tbody>

                                         </Table>
 
    </div>
  );
}

export default ContractShow;
