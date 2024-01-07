import React from 'react';
import logo from '../../Asset/logo/nextPadLogo.png'
import { NavLink } from 'react-router-dom';
import twitter from '../../Asset/all_icons/twitter.png'
import discord from '../../Asset/all_icons/discord.png'
import github from '../../Asset/all_icons/github.png'
import check from '../../Asset/all_icons/check.png'
import './MinitPage.css'

const MinitPage = () => {
    return (
        <div>
             <div className='banner-section'>
                <div className='banner_content'>
                    <div className='container'>
                        
                        <div className='top-header'>
                            <NavLink to="/">
                                <img src={logo} alt="nextpad-logo" />
                            </NavLink>
                            <button className='connect-btn'>Connect</button>
                        </div>

                        <div className='text-content'>
                            <div className='social_links'>
                                <h1>Nextpad</h1>
                                <div>
                                    <i><img className='social_icon' src={discord} alt="" /></i>
                                    <i><img className='social_icon' src={twitter} alt="" /></i>
                                    <i><img className='social_icon' src={github} alt="" /></i>
                                    
                                </div>
                            </div>
                            <p className='heading-des'>Nibh egestas id sed quam. Non leo odio orci ullamcorper nec arcu proin. Hendrerit odio dolor pretium viverra <br />
                               elementum rhoncus scelerisque ut odio. Sed 
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
                        <br />
                        <button className='start_ming'>Mint</button>
                    </div>

                    <div className='mint_content_two'>
                        <div className='total_win'>
                            <p>Total Winners</p>
                            <h1>32,235</h1>
                            <a href="/">Check Dashboard</a>
                        </div>
                        <div>
                            <p>We provide Node.js <br />
                             scripts for mintingh <br />
                             and claiming
                             </p> <br />
                             <a href="/">Use Bot</a>
                        </div>
                    </div>
                </div>

                <div className='rules-container'> 
                <h1>Rules</h1> <br />
                <p>
                    <img src={check} alt="" /> Fringilla egestas habitant pulvinar auctor egestas. Eget justo accumsan cum tincidunt amet praesent.
                </p>
                <p>
                    <img src={check} alt="" /> Euismod ac urna non feugiat vitae augue. Ut nunc volutpat et lacus donec eu massa ut duis est.
                </p>
                <p>
                    <img src={check} alt="" /> Eget feugiat imperdiet tortor purus pretium mauris varius fusce. Dictumst sed eget posuere phasellus.
                </p>
                <p>
                    <img src={check} alt="" /> Et urna integer quam commodo quis vitae vestibulum quis mi. Diam aliquet quis facilisis orci a. Dictum.
                </p>
                <p>
                    <img src={check} alt="" /> Est pretium quam pharetra egestas enim magna quis. Tortor arcu blandit fames vulputate. Quis justo.
                </p>
                <p>
                    <img src={check} alt="" /> Tellus dolor scelerisque diam neque. Adipiscing velit elementum scelerisque est eget. Morbi non.
                </p>
              </div>
                
             </div>
              
              

            </div>
        </div>
    );
};

export default MinitPage;