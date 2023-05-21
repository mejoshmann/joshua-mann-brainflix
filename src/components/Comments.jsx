import '../App.scss'
import avatar from '../assets/images/Mohan-muruge.jpg';

function Comments(props) {
  return(
<>
      <section className="comments">

        <img src={avatar} alt="BrainFlix Avatar" className="comments__avatar" />

          <form action="" className="comments__form">
            <h3 className="comments__form-heading">JOIN THE CONVERSATION</h3>
            <label htmlFor="input" className="comments__label">
              <textarea type="text" className="comments__input" id="input" placeholder="Add a new comment"/>
                <button className="comments__button">COMMENT</button>
            </label>
          </form>
      </section>

        <section className="comment">
          <ul className="comment__list">
            {props.selectedVideo.comments.map((comment, index)=> (
              <li className="comment__item" key={index}>
                <div className="comment__boxes topComment">
                  <div className="comment__blank"></div>
                    <div className="comment__box">
                      <div className="comment__heading-box" >
                        <h3 className="comment__name">{comment.name}</h3>
                        <p className="comment__date">{comment.timestamp = new Date(comment.timestamp).toLocaleDateString('fr')}</p>
                      </div>
                      <p className="comment__comment">{comment.comment}</p>
                    </div>

                </div>
              </li>
              ))}
            </ul>
        </section>
</>
  )
}

export default Comments;