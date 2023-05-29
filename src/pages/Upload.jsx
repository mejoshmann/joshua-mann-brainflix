import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImage from "../assets/images/Upload-video-preview.jpg";
import Nav from "../components/nav/Nav";
import "./Upload.scss";

function Upload() {
  // Not working properly
  const [publish, setPublish] = useState(localStorage.publish || "");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlePublish = (e) => {
    setPublish(e.target.value);
  };

  // Not working properly
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!publish.trim()) {
      setError(true);
      alert("Please fill in all fields")
      return;
    } 
    setError(false);
    alert("Thank you for uploading a video");
    navigate("/home");
    setPublish("")
  };

  return (
    <>
      <Nav />
      <div className="upload__borderBottom"></div>
      <div className="videoThumb">
        <h1 className="videoThumb__main--heading">Upload Video</h1>
        <h3 className="videoThumb__heading">VIDEO THUMBNAIL</h3>
        <div className="videoThumb__desktop">
          <img
            src={uploadImage}
            className="videoThumb__thumbnail"
            alt="thumbnail"
          ></img>

          <form className="videoThumb__form" onSubmit={handleSubmit}>
            <label className="videoThumb__label" id="title">
              TITLE YOUR VIDEO
              <input
                type="text"
                className="videoThumb__addVid"
                htmlFor="title"
                placeholder="Add a title to your video"
                onChange={handlePublish}
                value={publish}
                defaultValue=""
              />
            </label>
            <label className="videoThumb__description" id="description">
              ADD A VIDEO DESCRIPTION
              <input
                type="text"
                className="videoThumb__videoDescript"
                placeholder="Add a description to your video" 
                defaultValue=""          
              />
            </label>

            <div className="videoThumb__buttons">
              <button className="videoThumb__publish" type="submit" onClick={handleSubmit}>
                PUBLISH
              </button>
              <button className="videoThumb__cancel">CANCEL</button>
            </div>
          </form>
        </div>

        <div className="videoThumb__buttons hidden">
              <button className="videoThumb__publish" type="submit" onClick={handleSubmit}>
                PUBLISH
              </button>
              <button className="videoThumb__cancel">CANCEL</button>
            </div>
      </div>
    </>
  );
}

export default Upload;
