import React, { useState } from "react";
import Video from "./Video";
import Data from "../data/Data.js";
import PlayButton from "./PlayButton.jsx";
import AddVideo from "./AddVideo.jsx";

const VideoList = () => {
  const [videos,setVideo]=useState(Data)

  function addVideo(video){
    setVideo([...videos,{...video,id:videos.length+1}])
    console.log(video)

  }
  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <AddVideo addVideo={addVideo}></AddVideo>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        }}
      >
        {videos.map((video, index) => {
          return (
            <Video
              key={index}
              id={video.id}
              title={video.title}
              channel={video.channel}
              view={video.view}
              time={video.time}
              verified={video.verified}
            >
              <PlayButton
                onPlay={() => console.log("onPlay")}
                onPause={() => console.log("onPause")}
              >
                {video.title}
              </PlayButton>
            </Video>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
