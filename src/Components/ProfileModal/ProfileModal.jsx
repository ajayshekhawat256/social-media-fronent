import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



export default function ProfileModal({ open, setOpen }) {
    const [formData, setformData] = React.useState({
       firstName:'',
       lastName:'',
        worksAt: '',
        livesin: '',
        country: '',
        relationship: '',
        profileImage: null,
        coverImage: null
});

const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
}
    
    const style = {
        position: 'absolute',
        width: '50%',
        height: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-80%, -80%)',
        width: 400,
        bgcolor: 'background.paper',
        //border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form action="" className="infoForm">
                        <h3>Your info</h3>
                        <div id='names'>
                            <input type="text"
                               value={formData.name}
                                className='infoInput'
                                name='firstName'
                                onChange={handleChange}
                                placeholder='first Name'
                            
                            />

                            <input type="text"
                            value={formData.lastName}
                                className='infoInput'
                                name='lastName'
                                onChange={handleChange}
                                placeholder='Last Name'
                               
                            />
                        </div>

                        <div id='worksat'>
                            <input type="text"
                                value={formData.worksAt}
                                className='infoInput'
                                name='worksAt'
                                id='workss'
                                placeholder='works at'
                                onChange={handleChange}
                            />
                        </div>
                        <div id='address'>
                            <input
                                value={formData.livesin}
                                type="text"
                                className='infoInput'
                                name='livesin'
                                placeholder='Lives in'
                                onChange={handleChange}
                                />

                            
                                <input
                                    value={formData.country}
                                    type="text"
                                    className='infoInput'
                                    name='country'
                                    placeholder='Country'
                                    onChange={handleChange}
                                />
                            
                        </div>
                        <div id='relationship'>
                            <input type="text"
                                value={formData.relationship}
                                className='infoInput'
                                placeholder='Relation Status'
                                name='relationship'
                                onChange={handleChange}
                            />
                        </div>
                        <div id='images'>
                            Profile Image
                            <input type="file" name='profileImage' />
                            Cover Image
                            <input type="file" name='coverImage' />
                        </div>
                        <button className='button infoButton' onClick={handleSubmit}>Update</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
