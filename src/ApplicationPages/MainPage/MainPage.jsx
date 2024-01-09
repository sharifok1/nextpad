import React from 'react';
import twitter from '../../Asset/all_icons/twitter.png'
import discord from '../../Asset/all_icons/discord.png'
import github from '../../Asset/all_icons/github.png'
import check from '../../Asset/all_icons/check.png'
import './MainPage.css'
import Header from '../Shared/Header/Header';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
             <div className='banner-section'>
                <div className='banner_content'>
                    <div className='container'>
                        
                        {/* Header// */}
                       <Header/>
                       {/* Header// */}

                        <div className='text-content'>
                            <div className='social_links'>
                                <h1>Nextpad</h1>
                                <div>
                                    <i><img className='social_icon' src={discord} alt="" /></i>
                                    <i><img className='social_icon' src={twitter} alt="" /></i>
                                    <i><img className='social_icon' src={github} alt="" /></i> 
                                </div>
                            </div>
                            <p className='heading-des'>
                            Inspired by Analysoor, Nextpad is a fully decentralized, cross-chain token launchpad that has implemented an entirely on-chain random number generation algorithm to ensure completely fair issuance. Our mission is to establish a truly fair token launchpad for real users   
                            </p>
                        </div>
                    </div>
                </div>  
            </div>

            <div className='mintPage-body'>
             <div className='container'>
                <div className='mint_container'>
                    <div className='mint-des'>
                        <div>
                            <div className='mint_content'>
                                <p>Type</p><p>SPL</p>
                            </div>
                            <div className='mint_content'>
                                <p>Mint Price</p><p>0.1 SOL</p>
                            </div>
                            <div className='mint_content'>
                                <p>Token per mint</p><p>1000</p>
                            </div>
                            
                        </div>
                        <br />
                        <hr />
                     
                        <NavLink to="/mint"><button className='start_ming'>Mint</button></NavLink>
                    </div>

                    <div className='mint_content_two'>
                        <div className='total_win'>
                            <h3>Total Winners</h3>
                            <h1>0</h1>
                            <a href="/">Check Dashboard</a>
                            
                        </div>
                        <div className='mobile_view'></div>
                        <div className='total_wins'>
                            <h3>My Wins</h3>
                            <h1>0</h1>
                            <a href="/">Check Dashboard</a>
                        </div>
                    </div>
                </div>

                <div className='rules-container'> 
                <h1>Rules</h1> <br />
                <ul>
                    <li>
                        <p>
                            <img src={check} alt="" /> &#160;
                            Simply Click “mint” to participate. Among all the transactions in each block, there will be one to three addresses randomly picked as the winner. Each winner can get 5,000 $NXP tokens. Each mint costs 0.1 SOL. 95% of the cost would be refunded to your wallet instantly if your mint failed.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p>
                            <img src={check} alt="" /> &#160;
                            The fair mint will be ended once the 20,000 winning addresses have been selected
                        </p>
                    </li>
                    <br />
                    <li>
                        <p>
                            <img src={check} alt="" /> &#160;
                            The max supply of $NXP will be 5,000 * 20,000 = 100,000,000
                        </p>
                    </li>
                    <br />
                    <li>
                        <p>
                            <img src={check} alt="" /> &#160;
                            Fees distribution: <br />
                            50% - Dynamic bonus airdrop <br />
                            20% - Buyback $NXP <br />
                            20% - liquidity pool <br />
                            10% - future development
                        </p>
                    </li>
                    <br />
                    <li>
                        <p>
                            <img src={check} alt="" /> &#160;
                            Dynamic Bonus Airdrop: A certain amount of the fee income will be airdropped to all winners once the mint is completed. The earlier you participate in the mint, the more bonus airdrop you will receive.
                        </p>
                    </li>
                </ul>
              </div>
                
             </div>
              
              

            </div>
        </div>
    );
};

export default MainPage;