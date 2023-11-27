import React from 'react';
import sign from "../../images/sign.png";
import logo1 from "../../images/logo-white.png";
const SignUp = () => {
    return (
        <div>
            <div className="signUp-body">
                <div className="Sign-img">
                    <p>Big title goes here <br></br>and here and here to <br></br>make three lines.</p>
                    <img src={sign} alt=""/>
                </div>
                <div className="Sign-content">
                  <div className='sign-text'>
                  <img src={logo1} alt=''/>
                    <form>
                        <input className='box' type='text' placeholder='Name'/>
                        <input className='box' type='text' placeholder='Email'/>
                        <input className='box' type='text' placeholder='Password'/>
                        <button className='sign-btn'>Sign up</button>
                        <button className='sign-btn sign-fb'>Sign up with Facebook</button>
                    </form>
                    <p>Already have an account? <a href='#'>Login</a></p>
                    
                  </div>
                </div>
            </div>
        </div>
        );
    };
    
    export default SignUp;