import { useState } from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import axios from "axios";
import "./Comments.scss";

function Comments(props) {
  const { selectedVideo } = props;
  const [newComment, setNewComment] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newComment.trim() === "") {
      setIsInputEmpty(true);
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:1080/videos/${selectedVideo.id}/comments`,
        {
          comment: newComment,
        }
      );
      setIsInputEmpty(false);
    } catch (error) {
      console.error(error);
    }
    setNewComment("");
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `http://localhost:1080/videos/${selectedVideo.id}/comments/${commentId}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="desktop">
      <section className="comments">
        <img src={avatar} alt="BrainFlix Avatar" className="comments__avatar" />

        <form className="comments__form" onSubmit={handleSubmit}>
          <label htmlFor="input" className="comments__label">
            <h3 className="comments__form-heading">JOIN THE CONVERSATION</h3>
          </label>

          <div className="comments__tablet">
            <textarea
              className={`comments__input ${isInputEmpty ? "empty" : ""}`}
              id="input"
              placeholder="Add a new comment"
              value={newComment}
              onChange={(e) => {
                setNewComment(e.target.value);
                setIsInputEmpty(false);
              }}
            />
            <button className="comments__button" type="submit">
              COMMENT
            </button>
          </div>
        </form>
      </section>

      <section className="comment">
        <ul className="comment__list">
          {selectedVideo.comments?.map((comment, id) => (
            <li className="comment__item" key={id}>
              <div className="comment__boxes">
                <div className="comment__blank"></div>
                <div className="comment__box">
                  <div className="comment__heading-box">
                    <h3 className="comment__name">{comment.name}</h3>
                    <p className="comment__date">
                      {
                        (comment.timestamp = new Date(
                          comment.timestamp
                        ).toLocaleDateString("en-US"))
                      }
                    </p>
                  </div>
                  <p className="comment__comment">{comment.comment}</p>
                  <div className="comment__item" key={id}>
                    {/* not working correctly */}
                    {/* <button
                      className="comment__delete-button"
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      Delete
                    </button> */}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Comments;
