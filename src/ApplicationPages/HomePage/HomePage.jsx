import React from 'react';
import logo from '../../Asset/logo/nextPadLogo.png'
import './HomePage.css'
import { NavLink } from 'react-router-dom';

const HomePage = () => {


    return (
        <div className=''>
            <div className='banner-section'>
                <div className='banner_content'>
                    <div className='container'>
                        
                        <div className='top-header'>
                            <img src={logo} alt="nextpad-logo" />
                            <button className='connect-btn'>Connect</button>
                        </div>

                        <div className='text-content'>
                            <h1>Nextpad</h1>
                            <p className='heading-des'>Nibh egestas id sed quam. Non leo odio orci ullamcorper nec arcu proin. Hendrerit odio dolor pretium viverra <br />
                               elementum rhoncus scelerisque ut odio. Sed </p>
                        </div>
                    </div>
                    
                </div>  
            </div>

             {/* homepage body//  */}
             <div className='home-body'>
                <div className='container'>
                  
                  <div className='mint-timer'>
                      <div className='time-counter'>
                          <h3>Ends in</h3>
                          <div className='time-code'>5</div>
                          <div className='time-code'>8</div>
                          <span>Seconds</span>
                      </div>
                      <div>
                        <NavLink to="/mint">
                             <button className='mint_btn'>Mint</button>
                        </NavLink>
                          
                      </div>
                  </div>

                 {/* three cards// */}
                  <div className='three-cards'>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>532.40<span className='small-text'>Sol</span></p>
                            <p>Total Prize Pol</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>532.235</p>
                            <p>Total Winners (52.55%)</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>13.4%</p>
                            <p>Avg winning rate (last 1h)</p>
                         </div>
                      </div>
                  </div>

                  <div className='hr-line'>
                            <hr />
                  </div>

                {/* your mints// */}
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
                            <p>My wins</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0</p>
                            <p>My wins</p>
                         </div>
                      </div>
                  </div>
                  <br /> <br />
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
                            <p>My wins</p>
                         </div>
                      </div>
                      <div className='three-cards-content'> 
                        <div>
                            <p className='head_num'>0</p>
                            <p>My wins</p>
                         </div>
                      </div>
                  </div>

                  
                {/* history */}
                <div className='hr-line'>
                                    <hr />
                        </div>
                {/* -----troggle btn---- */}
                <div className='toggle-body'>
                    <span class="switcher switcher-1">
                        <input type="checkbox" id="switcher-1"/>
                        <label for="switcher-1"></label>
                    </span>
                </div>

                <div className='block_history'>
                 
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                    
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                 
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />
                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
                        <p>Block # 238,651,702</p>
                    </div>
                    <hr /><br />

                    <div className='address-history'>
                        <p>BsnvBd1g***HFX8Bk8ZHCxyNsu</p>
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