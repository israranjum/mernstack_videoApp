import React from "react";

const initialValue = {
  id: 0,
  title: "",
  channel: "node Lecture",
  view: "",
  time: "1 year ago",
  verified: true,
};
const AddVideo = ({ addVideo }) => {
  const [video, setVideo] = React.useState(initialValue);

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    // console.log(video);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addVideo(video);
    setVideo(initialValue);
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        value={video.title}
        placeholder="Enter Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="view"
        value={video.view}
        placeholder="Enter Views "
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Video </button>
    </form>
  );
};

export default AddVideo;
