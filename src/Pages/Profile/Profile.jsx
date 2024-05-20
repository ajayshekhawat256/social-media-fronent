import React from 'react'
import LogoSearch from '../../Components/LogoSearch/LogoSearch'
import InfoCard from '../../Components/InfoCard/InfoCard'
import FollowersCard from '../../Components/FollowersCard/FollowersCard'
import './Profile.css'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'
const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className="Profile-center">


        {/* <LogoSearch/> */}
        <ProfileCard />
        <PostSide />
        {/* <InfoCard/>
        <FollowersCard/>  */}
      </div>
      <RightSide />
    </div>
  )
}

export default Profile