import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import uploadImage from '../assets/images/Upload-video-preview.jpg';
import Nav from '../components/Nav';
import '../styles/partials/_upload.scss';

function Upload() {

    const [publish, setPublish] = useState(localStorage.publish || '');
    const navigate = useNavigate();
    const notify = ()=> alert("Thank you for uploading a video");
   

    const handlePublish = (e) => {
        setPublish(e.target.value);
        localStorage.setItem('publish', e.target.value);
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for uploading a video");
        navigate('/home');
    }

    return(
        
        <>
    <Nav />
        <div className="videoThumb">

        <h1 className="videoThumb__main--heading">Upload Video</h1>
            <h3 className="videoThumb__heading">VIDEO THUMBNAIL</h3>
            <img src={uploadImage} className="videoThumb__thumbnail" alt="thumbnail"></img>


            <form  className="videoThumb__form" onSubmit={handleSubmit}>
                <label  className="videoThumb__label" id="title">TITLE YOUR VIDEO
                    <input type="text" className="videoThumb__addVid" htmlFor="title" placeholder="Add a title to your video" onChange={handlePublish} 
                    value={publish} />
                </label>
                <label  className="videoThumb__description" id="description">ADD A VIDEO DESCRIPTION
                    <input type="text" className="videoThumb__videoDescript" placeholder="Add a description to your video" />
                </label>
            <button className="videoThumb__publish" type="submit">PUBLISH</button>

            </form>
            
            
            <button className="videoThumb__cancel" >CANCEL</button>

        </div>

</>
    )
}

export default Upload;