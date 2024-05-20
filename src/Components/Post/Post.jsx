import React, { useState } from 'react'
import Heart from '../../img/like.png'
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import NotLike from '../../img/notlike.png';
import './Post.css'
const Post = () => {
    const [liked,setLiked]=useState(true)
    const handleLike=()=>{
        setLiked((prev)=>!prev);
    }
    return (
        <div className='Post'>
            <img src="https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlnZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className="postReact">
                <img src={liked? Heart: NotLike} onClick={handleLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{}</span>
            <div className="detail">
                <span><b>Ajay</b></span>
                <span>this is it too</span>
            </div>
        </div>
    )
}
export default Post