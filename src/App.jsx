import {useState} from 'react';
import videoThumbnails from './data/videos.json';
import videoDetailsJson from './data/video-details.json';
import '../src/App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Comments from './components/Comments';
import Thumbnails from './components/Thumbnails';

function App() {
// Set state for main video
  const [videoData, setVideoData] = useState(videoDetailsJson);  
  // set selected video
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  // Set state for thumbnail images
  const [videoThumbs, setVideoThumbs] = useState(videoThumbnails);

  // Click function to set new ideo
  const handleVideoSelection = (id)=> {
    const foundVideo = videoDetailsJson.find((thumbnail) => thumbnail.id === id );
    setSelectedVideo(foundVideo);
  };

  return (
    <div className="App">

<Nav />
<Main selectedVideo={selectedVideo} />
<Comments selectedVideo={selectedVideo} />
<Thumbnails selectedVideo={selectedVideo}
            handleVideoSelection={handleVideoSelection}
            videoThumbs={videoThumbs} />

    </div>
  )
}

export default App;
