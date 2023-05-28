import React from "react";
import { Link } from "react-router-dom";

function Thumbnails(props) {
  const { videoThumbs } = props;
  const { selectedVideo } = props;

  return (
    <section className="thumbnail">
      <h2 className="thumbnail__heading">NEXT VIDEOS</h2>
      <ul className="thumbnail__list">
        {videoThumbs
          .filter((thumbnail) => thumbnail.id !== selectedVideo.id)
          .map((thumbnail) => (
            <li className="thumbnail__item" key={thumbnail.id}>
              <Link to={`/videos/${thumbnail.id}`} className="thumbnail__img">
                <img
                  src={thumbnail.image}
                  className="thumbnail__img"
                  alt={thumbnail.title}
                />
              </Link>
              <div className="thumbnail__box">
                <h3 className="thumbnail__title">{thumbnail.title}</h3>
                <h4 className="thumbnail__name">{thumbnail.channel}</h4>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
export default Thumbnails;
