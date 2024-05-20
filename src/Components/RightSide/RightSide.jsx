import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import home from '../../img/home.png';
import Notfications from '../../img/noti.png';
import Comment from '../../img/comment.png'
import { UilSetting } from "@iconscout/react-unicons"
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (

        <div className='RightSide'>
            <div className="navIcons">
                <Link>
                    <img src={home} alt="" />
                </Link>
                <UilSetting className="ui" />
                <img src={Notfications} alt="" />
                <Link to='/chat'>
                    <img src={Comment} alt="" />
                </Link>
            </div> 
            <TrendCard/>
            <button className='button r-button' onClick={()=>setModalOpened(true)}> 
            Share
            </button>
            {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
        </div>
    )
}

export default RightSide