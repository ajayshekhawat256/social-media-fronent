import React from 'react'
import './ProfielCard.css'
import profile from '../../img/profileImg.jpg'
import cover from '../../img/cover.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
    const user=useSelector((state)=>state.auth.authData.user);
    {console.log(user,"this is userdata");}

    
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>{user.firstName} {user.lastName}</span>
                <span>{user.worksAt?user.worksAt:"What do you do!!"}</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>

                <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit", display: "flex" }}>
                    My Profile
                </Link>
            </span>
        </div>
    )
}

export default ProfileCard