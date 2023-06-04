import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "../main/Main";
import Comments from "../comments/Comments";
import Thumbnails from "../thumbnails/Thumbnails";
import axios from "axios";

function Home() {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:1080/videos`)
      .then((response) => {
        setVideoData(response.data);
      }).catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (params.id) {
      axios
        .get(
          `http://localhost:1080/videos/${params.id}`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        });
    } else if (videoData.length > 0) {
      axios
        .get(
          `http://localhost:1080/videos/${videoData[0].id}`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        });
    }
  }, [params.id, videoData]);

  return (
    <>
      <Main selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} />
      <Thumbnails selectedVideo={selectedVideo} videoThumbs={videoData} />
    </>
  );
}

export default Home;
