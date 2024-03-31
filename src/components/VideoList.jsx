import React, { useState } from "react";
import Video from "./Video";
import Data from "../data/Data.js";
import PlayButton from "./PlayButton.jsx";
import AddVideo from "./AddVideo.jsx";

const VideoList = () => {
  const [videos,setVideo]=useState(Data)
  const [editableVideo,setEditableVideo]=useState()

  function addVideo(video){
    setVideo([...videos,{...video,id:videos.length+1}])
    console.log(video)

  }

  function deleteVideo(id){
    // console.log(id)
    const deleteOne = videos.filter(video => video.id !== id)
    // console.log(deleteOne)
    setVideo(deleteOne)
  }

  function editVideo(id){
    console.log(id)
    const editOne = videos.find(video => video.id === id)
    setEditableVideo(editOne)
  }

  function updateVideo(video){
    const index= videos.findIndex(v => v.id === video.id)
    const newVideo = [...videos]
    // console.log(index)
    newVideo.splice(index,1,video)
    setVideo(newVideo)
  }



  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
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
              editVideo={editVideo}
              deleteVideo={deleteVideo}
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
