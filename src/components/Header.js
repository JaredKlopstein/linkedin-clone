import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/linkedin.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { selectUser } from '../features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    signOut(auth)
  };

  return (
    <div className="header">
      <div className="headerLeft">
          <img src={Logo} alt="" />

          <div className="header__search">
            <SearchIcon></SearchIcon>
            <input placeholder='Search' type="text" />
          </div>
      </div>

      <div className="headerRight">
      <HeaderOption Icon={HomeIcon}title='Home'/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar={true}title='Me' onClick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header