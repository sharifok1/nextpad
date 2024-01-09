import React from 'react';
import './MintPage.css'
import { NavLink } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import twitter from '../../Asset/all_icons/twitter.png'
import discord from '../../Asset/all_icons/discord.png'
import github from '../../Asset/all_icons/github.png'

const HomePage = () => {

    return (
        <div className=''>
            {/* ==================================banner part============================= */}
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

            {/* ============================homepage body==================================  */}
             <div className='home-body'>
                <div className='container'>
                  
                  <div className='mint-timer'>
                      <div className='time-counter'>
                          <h3>Ends in</h3>
                          <div className='time_blocks'>
                            <div className='time-code'>0</div>
                            <div className='time-code'>0</div>
                          </div>
                          <span>Seconds</span>
                      </div>
                      <div>
                        <NavLink to="/mint">
                             <button className='mint_btn'>Mint</button>
                        </NavLink>
                          
                      </div>
                  </div>

                 {/* =======================three cards=============================== */}

                  <div className='three-cards'>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0.00<span className='small-text'>Sol</span></p>
                            <p>Total Prize Pol</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0</p>
                            <p>Total Winners</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0.0%</p>
                            <p>Avg winning rate</p>
                         </div>
                      </div>
                  </div>

                  <div className='hr-line'>
                            <hr />
                  </div>

                {/* =====================================your mints=========================== */}
                <div>

                 <h1 className='heading-one'>Your Mints</h1> 
                  <div className='three-cards'>
                   
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0</p>
                            <p>My wins</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0</p>
                            <p>Total $NXT token</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0</p>
                            <p>My winning rates</p>
                         </div>
                      </div>
                  </div>
                  
                {/* history */}
                <div className='hr-line'>
                        <hr />
                </div>
                {/* =============================troggle btn================================== */}
                <div className='toggle-body'>
                    <span class="switcher switcher-1">
                        <input type="checkbox" id="switcher-1"/>
                        <label for="switcher-1"></label>
                    </span>
                </div>

                <div className='block_history'>
                 
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                    
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                 
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <div className='mobile_show'><span>&#x2195;</span></div>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                
                </div>
                <br /><br /><br />

                </div>  
                 </div>
            </div> 
        </div>
    );
};

export default HomePage;