import React from "react";

const PlayButton = ({ children, onPlay, onPause }) => {
    const [playing,setPlaying]=React.useState(false)
    
    function handleClick(){
        if(playing){
            onPause();

        }else{
            onPlay();
        }
      setPlaying(!playing)
  
    }
  return (
    <button
      style={{
        border: "none",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        cursor: "pointer",
        marginTop: "5px",
        display: "block",
        width: "100%",
      }}
      onClick={handleClick}
    >
      {children} <span>{playing?"⏸️":"▶️"}</span>
    </button>
  );
};

export default PlayButton;
