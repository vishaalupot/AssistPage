import './Main.css';
import headingimage from '../../assets/headingimage.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Main = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFormValid, setIsFormValid] = useState(false); // State to track form validity
    const navigate = useNavigate();

    // Effect to check form validity when username or phoneNumber changes
    useEffect(() => {
        const isUsernameValid = username.length > 0;
        const isPhoneNumberValid = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);

        // const warning1 = document.getElementById("warning1")
        // const warning2 = document.getElementById("warning2")

        // if(isUsernameValid){
        //     warning1.style.display = 'none'
        // }
        // else{
        //     warning1.style.display = 'block'
        // }

        // if(isPhoneNumberValid){
        //     warning2.style.display = 'none'
        // }
        // else{
        //     warning2.style.display = 'block'
        // }

        

        setIsFormValid(isUsernameValid && isPhoneNumberValid);
    }, [username, phoneNumber]);

    const handleSubmit = async (e) => {
        e.preventDefault();

    
            const isUsernameValid = username.length > 0;
            const isPhoneNumberValid = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
    
            const warning1 = document.getElementById("warning1")
            const warning2 = document.getElementById("warning2")

            console.log("ih")
    
            if(isUsernameValid){
                warning1.style.display = 'none'
            }
            else{
                warning1.style.display = 'block'
            }
    
            if(isPhoneNumberValid){
                warning2.style.display = 'none'
            }
            else{
                warning2.style.display = 'block'
            }


        if  (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
           
            return;
        }

        const formData = { Username: username, PhoneNumber: phoneNumber };

        try {
            const response = await axios.post('https://sheet.best/api/sheets/77fe0bb1-6abe-42d4-adeb-18610034c519', formData);
            console.log(response);
            setUsername('');
            setPhoneNumber('');
            navigate('/callback');
        } catch (error) {
            console.error('Error submitting form:', error);
           
        }
    };

    return (
        <div className="main">
            <div className='heading'>
                <img src={headingimage} className='headingImage' alt="heading" />
                <div className='headingText'>
                    We’re happy to <br />
                    assist you 24X7
                </div>
                <div className='headingText2'>
                    Request an instant call back
                </div>
            </div>

            <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <form className='form' onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        placeholder="Enter Your Username"
                        className="input-field"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="input-field" className="input-label">Enter Your Username</label>
                    <span className="input-highlight"></span>
                   
                </div>
                <div className='warningText'id="warning1" >Please enter the username</div>

                <div className="input-container">
                    <input
                        placeholder="Enter Your Phone Number"
                        className="input-field"
                        type="tel"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <label htmlFor="input-field" className="input-label">Enter Your Phone Number</label>
                    <span className="input-highlight"></span>
                </div>
                <div className='warningText' id="warning2">Please enter the phone number</div>
                <input
                    type="submit"
                    className={`RequestButton ${isFormValid ? 'valid' : 'invalid'}`} 
                    value="REQUEST A CALLBACK"
                />
            </form>
            </div>
            

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', color: 'white', flexDirection: 'row', alignItems: 'center' }}>
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
};

export default Main;
