import React from 'react';
import login from "../../images/login.png";
import logo1 from "../../images/logo-white.png";
const SignUp = () => {
    return (
        <div>
            <div className="login-body ">
                <div className="login-img">
                    <p>Big title goes here <br></br>and here and here to <br></br>make three lines.</p>
                    <img src={login} alt=""/>
                </div>
                <div className=" login ">
                   <div className='login-content'>
                        <img src={logo1} alt=''/>
                        <form>
                            <input className='box box-blue' type='text' placeholder='Username/email'/>
                            <input className='box box-blue' type='text' placeholder='Password'/>
                            <button className='sign-btn'>Sign up</button>
                            <button className='sign-btn sign-fb'>Sign up with Facebook</button>
                        </form>
                        <p>Already have an account?</p>
                        <span>Login</span>
                   </div>
                </div>
            </div>
        </div>
        );
    };
    
    export default SignUp;