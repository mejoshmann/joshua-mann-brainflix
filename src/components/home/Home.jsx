import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import Main from "../../components/main/Main";
import Comments from "../../components/comments/Comments";
import Thumbnails from "../../components/thumbnails/Thumbnails";
import axios from "axios";
const apiKey = "56fdb86b-8784-43a2-9393-b383c6e4302d";

function Home() {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
      .then((response) => {
        setVideoData(response.data);
      });
  }, []);

  useEffect(() => {
    if (params.id) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        });
    } else if (videoData.length > 0) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoData[0].id}?api_key=${apiKey}`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        });
    }
  }, [params.id, videoData]);

  return (
    <>
      <Nav />
      <Main selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} />
      <Thumbnails selectedVideo={selectedVideo} videoThumbs={videoData} />
    </>
  );
}

export default Home;
