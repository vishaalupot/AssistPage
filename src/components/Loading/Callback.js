import React from "react";
import './Callback.css'
import headingimage from '../../assets/headingimage.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clock from '../../assets/clock-animated.gif'


const Callback = () => {
    return(
        <div className="main">
        <div className='heading'>
            <img src={headingimage} className='headingImage' alt="heading"/>
            <div className='headingText'>
                We’ll call you Soon
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={clock} style={{height: '200px', opacity: '0.8'}}/>
        </div>
        
        
      
    
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}> 
            <div style={{ display: 'flex', color: 'white', flexDirection: 'row', alignItems: 'center', padding: '20px 0px' }}>
                <div className="line"></div>
                <span className="or-text">OR</span>
                <div className="line"></div>
            </div>
    
            <div className='lastPara1'>Call on Our Toll Free Number</div>
            <div className='headingText'>9876543210</div>
            <div className='lastPara2'>From 12:00 PM to 6:00 PM</div>
        </div>
    </div>   
    );
   
}

export default Callback;