import React from 'react';
import Icon0 from '../src/images/icon0.png';
import Icon1 from '../src/images/icon1.png';
import Icon2 from '../src/images/icon2.png';
import Icon3 from '../src/images/icon3.png';
import Icon4 from '../src/images/icon4.png';
import Logo from '../src/images/logo.png';
import './App.css';
import './responsive.css';
import AccountInfo from './Components/Home/AccountInfo';
import SignUp from './Components/Home/SignUp';
import UserProfile from './Components/Home/UserProfile';
import Login from './Components/Home/Login';
import CallPopUp from './Components/Home/CallPopUp';
import Features from './Components/Home/Features';
import FormTool from './Components/Home/FormTool';

const App = () => {
  return (
    <div>
      {/*---------------------------------sidebar menu----------------------------------  */}
      {/* <div className='sidebar-wrapper'>
        <div className='menu'>
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className='menu'>
          <img src={Icon0} alt="" />
          <p>Menu</p>
        </div>
        <div className='menu'>
          <img src={Icon1} alt="" />
          <p>Recent</p>
        </div>
        <div className='menu'>
          <img src={Icon2} alt="" />
          <p>Clinic Finder</p>
        </div>
        <div className='menu'>
          <img src={Icon3} alt="" />
          <p>Need Help</p>
        </div>
        <div className='menu'>
          <img src={Icon4} alt="" />
          <p>Home</p>
        </div>


      </div> */}
      {/* ---------------------------------home-----------------------------------  */}
      <div>

      </div>
      <AccountInfo></AccountInfo>
      {/* <UserProfile></UserProfile> */}
      {/* <SignUp></SignUp>      */}
      {/* <Login></Login> */}
      {/* <CallPopUp></CallPopUp> */}
      {/* <Features></Features> */}
      {/* <FormTool></FormTool> */}
    </div>
  );
};

export default App;