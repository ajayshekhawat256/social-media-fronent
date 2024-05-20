import React, { useState } from 'react'
import img1 from "../../img/img1.png"
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../State/User/Action';

const User = ({ person }) => {
  const dispatch=useDispatch();
  const {user} = useSelector((state) => state.auth.authData)
  const [following, setFollowing] = useState(person.followers.includes(user._id))
  const  handleFollow=()=>{
    following?dispatch(unfollowUser(person._id,user)):dispatch(followUser(person._id,user));
    setFollowing((prev)=>!prev);
  }
  return (
    <div className='follower'>
      <div>
        <img src={img1} alt="" className='followerImage' />
        <div className="name">
          <span>{person.firstName}</span>
          <span>@{person.Username}</span>
        </div>
      </div>
      <button className={following ? "button fc-button UnfollowButton" : "button fc-button"} onClick={handleFollow}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  )
}

export default User