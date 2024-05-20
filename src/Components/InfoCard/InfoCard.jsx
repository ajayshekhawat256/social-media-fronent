import { React, useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../State/Auth/Action.js';


const InfoCard = () => {
    const dispatch=useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const {user}=useSelector((state)=>state.auth.authData);
    const handleLogout=()=>{
        dispatch(logout());
    }
    useEffect(()=>{

    },[])
    // const handleClose = () => setOpen(false);
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(!show);

    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen
                        width="2rem"
                        height="1.2rem"
                        onClick={handleOpen}
                    />
                    <ProfileModal open={open} setOpen={setOpen}  />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status</b>
                </span>
                <span>in Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives In</b>
                </span>
                <span>in Mullan</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at</b>
                </span>
                <span>in Jaipur</span>
            </div>
            <button className='button logout-button' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard