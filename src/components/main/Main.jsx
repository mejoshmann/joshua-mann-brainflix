import "./main.scss";
import heart from "../../assets/Icons/likes.svg";
import views from "../../assets/Icons/views.svg";

function Main(props) {
  const { selectedVideo } = props;

  return (
    <main className="main">
      <div className="main__tablet">
        <video
          className="video__image"
          controls
          poster={selectedVideo.image}
        ></video>
      </div>
      <div className="video">
        <div className="main__desktop">
          <h1 className="video__heading">{selectedVideo.title}</h1>

          <div className="video__box">
            <div className="video__views--tablet">
              <h3 className="video__channel">By {selectedVideo.channel}</h3>
              <div className="video__date">
                {
                  (selectedVideo.timestamp = new Date(
                    selectedVideo.timestamp
                  ).toLocaleDateString("fr"))
                }
              </div>
            </div>

            <div className="video__like--tablet">
              <div className="video__view-box">
                <img
                  className="video__icon-views"
                  src={views}
                  alt="Views Icon"
                />
                <p className="video__views">{selectedVideo.views}</p>
              </div>
              <div className="video__like-box">
                <img src={heart} alt="" className="video__icon-likes" />
                <p className="video__likes">{selectedVideo.likes}</p>
              </div>
            </div>
          </div>

          <p className="video__container-comment">
            {selectedVideo.description}
          </p>
          <h3 className="video__count">
            {selectedVideo.comments?.length} Comments
          </h3>
        </div>
      </div>
    </main>
  );
}

export default Main;
