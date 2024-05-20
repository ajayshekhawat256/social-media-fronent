import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowerData'
import User from '../User/User'
import { usePageLeave } from '@mantine/hooks'
import axios from 'axios'

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await axios.get("http://localhost:5000/user");
      setPersons(data);
      console.log(data, "this is all data");
    }
    fetchPersons();
  }, [])
  return (
    <div className='FollowersCard'>
      <h3>People You may know</h3>
      {
        persons.map((person, id) => {
          if (person._id !== User._id)
            return <User person={person} key={id} />
        })}
    </div>
  )
}

export default FollowersCard