import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import Background from '../assets/background.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <p># {topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src={Background} alt="" />
            <Avatar src={user.photoURL}className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,300</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">220</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('ReactJS')}
            {recentItem('NextJS')}
            {recentItem('Jobs')}
            {recentItem('Help')}
        </div>
    </div>
  )
}

export default Sidebar