import React, { useState } from 'react';
import { ethers } from 'ethers';
import logo from '../../../Asset/logo/nextPadLogo.png';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectMeta = ()=>{
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChanged([result[0]])
            })
        }
        else{
            setErrorMessage('Please install MetaMask Extension')
        }
    }

    const accountChanged = (accountName)=>{
        setDefaultAccount(accountName)
        // getUserBalance(accountName)
    }
    // getting user Balance//
    // const getUserBalance = (accountAddress) =>{
    //     window.ethereum.request({method:'eth_getBalance', params: [String(accountAddress), "latest"]})
    //     .then(balance =>{
    //         setUserBalance(ethers?.utils.formatEther(balance));
    //     })
    // }

    return (
        <div>
             <div className='top-header'>
                  <NavLink to="/">
                         <img src={logo} alt="nextpad-logo" />
                  </NavLink>
                  <button 
                     className='connect-btn'
                     onClick={connectMeta}
                     >
                        {
                         defaultAccount ? 
                         <span>{defaultAccount.toString().slice(0, 6)}...
                         {defaultAccount.toString().slice(-4)}</span> : 'Connect Wallet'
                         }
                 </button>
             </div>
        </div>
    );
};

export default Header;