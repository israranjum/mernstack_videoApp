import "./Video.css";

const Video = ({ id, title, channel, time, verified, view,children }) => {
  return (
    <div className="container">
      <div className="pic">
        <img
          src={`https://picsum.photos/id/${id}/310/174`}
          alt="abc"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div>{title}</div>
      <div>
        {channel} {verified && ""}
      </div>
      <div>
        {view} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Video;
