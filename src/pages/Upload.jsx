import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImage from "../assets/images/Upload-video-preview.jpg";
// import image from "../assets/images/husky.jpg";
import "./Upload.scss";
import axios from "axios";

function Upload() {
  const navigate = useNavigate();
  const [newVideo, setNewVideo] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields')
      return;
    }

    try {
  const response = await axios.post (
    `http://localhost:1080/videos`,
    {
        title: title,
        description: description,
    }
  );
} catch (error) {
  console.error(error);
  navigate("/home");
}
  setNewVideo({});
  };

  return (
    <>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="videoThumb__description" id="description">
              ADD A VIDEO DESCRIPTION
              <input
                type="text"
                className="videoThumb__videoDescript"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <div className="videoThumb__buttons">
              <button
                className="videoThumb__publish"
                type="submit"
              >
                PUBLISH
              </button>
              <button type="button" className="videoThumb__cancel">
                CANCEL
              </button>
            </div>
          </form>
        </div>

        <div className="videoThumb__buttons hidden">
          <button
            className="videoThumb__publish"
            type="submit"
          >
            PUBLISH
          </button>
          <button type="button" className="videoThumb__cancel">
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
}

export default Upload;
