import React from 'react'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
    return (
        <div className='Posts'>
            {
                [1, 1, 1, 1].map((post, id) => (
                    <Post />
                ))
            }
        </div>
    )
}

export default Posts