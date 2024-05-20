import React from 'react'
import './LogoSearch.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { UilSearch } from '@iconscout/react-unicons';


const LogoSearch = () => {
    return (
        <div className='LogoSearch'>
            <Link to={'/home'}>
                <img src={logo} alt="" />
            </Link>
            <div className="Search">
                <input type="text" placeholder='#Explore' />
                <div className="s-icon">
                    <UilSearch/>
                </div>
            </div>
        </div>
    )
}

export default LogoSearch