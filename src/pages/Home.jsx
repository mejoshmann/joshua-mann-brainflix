import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Comments from "../components/Comments";
import Thumbnails from "../components/Thumbnails";
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
          .get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`)
          .then((response) => {
            setSelectedVideo(response.data);
          }) 
        } else if (videoData.length > 0){
          axios
          .get(`https://project-2-api.herokuapp.com/videos/${videoData[0].id}?api_key=${apiKey}`)
          .then((response) => {
            setSelectedVideo(response.data);
          }) 
        }
      },[params.id, videoData]);

console.log(selectedVideo)

  return (
    <>
      <Nav />
      <Main selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} />
      <Thumbnails
        selectedVideo={selectedVideo} 
        videoThumbs={videoData} 
       /> 
    </>
  );
}

export default Home;




