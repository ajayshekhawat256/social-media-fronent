import React from 'react'
import './ChatBox.css'

const ChatBox = () => {
  return (
    <div className='ChatBox-container'>
        <div className="chat-header">
            <div className="follower">
                <div>
                    <img className='followerImage' src="" alt="" />
                    <div className="name">
                        <span>
                            Ajay Shekhawat
                        </span>
                    </div>
                </div>
            </div>
            <hr
            style={{width:"95%",
            border:"0.1px solid #ececec",
            marginTop:"20px"

            }} />

        </div>
        <div className="chat-body">
            <div></div>
        </div>
    </div>
  )
}

export default ChatBox