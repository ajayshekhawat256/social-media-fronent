import React, { useRef, useState } from 'react'
import './PostShare.css'
import profile from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef();
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        const newPost = {
            desc: desc.current.value,
        }
        { console.log(newPost) }
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            console.log(newPost);
        }
    }
    return (
        <div className="PostsShare">
            <dl></dl>
            <img src={profile} alt="" />
            <div>
                <input type="text" placeholder="What's on your mind" ref={desc} required />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video" }}>
                        <UilPlayCircle />
                        Video
                    </div>{" "}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className='option' style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Schedulde
                    </div>
                    <button className='button ps-button' onClick={handleSubmit}>Share</button>
                    <div style={{ display: "none" }}>
                        <input type="file"
                            name='myImage'
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                {image && (
                    <div className='previewImage'>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare