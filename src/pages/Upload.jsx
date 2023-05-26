import uploadImage from '../assets/images/Upload-video-preview.jpg';
import Nav from '../components/Nav';
import '../styles/partials/_upload.scss';

function Upload() {

  

    return(
        
        <>
    <Nav />
        <div className="videoThumb">

        <h1 className="videoThumb__main--heading">Upload Video</h1>
            <h3 className="videoThumb__heading">VIDEO THUMBNAIL</h3>
            <img src={uploadImage} className="videoThumb__thumbnail"></img>


            <form  className="videoThumb__form">
                <label  className="videoThumb__label" id="title">TITLE YOUR VIDEO
                    <input type="text" className="videoThumb__addVid" htmlFor="title" placeholder="Add a title to your video"/>
                </label>
                <label  className="videoThumb__description" id="description">ADD A VIDEO DESCRIPTION
                    <input type="text" className="videoThumb__videoDescript" placeholder="Add a description to your video" />
                </label>
            </form>
            
            
            <button className="videoThumb__publish" >PUBLISH</button>
            <button className="videoThumb__cancel" >CANCEL</button>

        </div>

</>
    )
}

export default Upload;