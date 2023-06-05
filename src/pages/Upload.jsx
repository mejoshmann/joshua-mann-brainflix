import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImage from "../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import axios from "axios";

function Upload() {
  const navigate = useNavigate();
  const [newVideo, setNewVideo] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      setIsInputEmpty(true);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:1080/videos`, {
        title: title,
        description: description,
      });
      setIsInputEmpty(false);
    } catch (error) {
      console.error(error);
    }
    setNewVideo({});
    navigate("/home");

   
  };

  const handleCancel = () => {
    navigate("/Home");
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

          <form className="videoThumb__form" onSubmit={handleSubmit} required>
            <label className="videoThumb__label" id="title">
              TITLE YOUR VIDEO
              <input
                className={`videoThumb__addVid ${isInputEmpty ? "empty" : ""}`}
                htmlFor="title"
                placeholder="Add a title to your video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className={`videoThumb__description ${isInputEmpty ? "empty" : ""}`} id="description" required>
              ADD A VIDEO DESCRIPTION
              <input
                htmlFor="description"
                className="videoThumb__videoDescript"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <div className="videoThumb__buttons">
              <button className="videoThumb__publish" type="submit">
                PUBLISH
              </button>
              <button
                type="button"
                className="videoThumb__cancel"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Upload;
