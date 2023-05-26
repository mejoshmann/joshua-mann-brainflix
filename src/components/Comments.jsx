import { useState } from "react";
import avatar from "../assets/images/Mohan-muruge.jpg";

function Comments(props) {
  const { selectedVideo } = props;

  const [comment, setComment] = useState(localStorage.publish || "");

  const handleComment = (e) => {
    setComment(e.target.value);
    localStorage.setItem("email", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment(e.target.value);
    localStorage.setItem("comment", e.target.value);
  };

  return (
    <div className="desktop">
      <section className="comments">
        <img src={avatar} alt="BrainFlix Avatar" className="comments__avatar" />

        <form
          className="comments__form"
          onChange={handleComment}
          value={comment}
        >
          <label htmlFor="input" className="comments__label">
            <h3 className="comments__form-heading">JOIN THE CONVERSATION</h3>
          </label>

          <textarea
            className="comments__input"
            id="input"
            placeholder="Add a new comment"
          />
          <button className="comments__button" onClick={handleSubmit}>
            COMMENT
          </button>
        </form>
      </section>

      <section className="comment">
        <ul className="comment__list">
          {selectedVideo.comments?.map((comment, index) => (
            <li className="comment__item" key={index}>
              <div className="comment__boxes">
                <div className="comment__blank"></div>
                <div className="comment__box">
                  <div className="comment__heading-box">
                    <h3 className="comment__name">{comment.name}</h3>
                    <p className="comment__date">
                      {
                        (comment.timestamp = new Date(
                          comment.timestamp
                        ).toLocaleDateString("fr"))
                      }
                    </p>
                  </div>
                  <p className="comment__comment">{comment.comment}</p>
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
