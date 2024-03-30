import React from "react";
import VideoList from "./components/VideoList";
import GetData from "./components/FormHandle/GetData";

const App = () => {
  // const [count, setCount]= React.useState(0)
  // if(count<0){
  //   setCount(0)
  // }
  // console.log("render")
  return (
    <div>
      {/* <VideoList></VideoList> */}
{/* 
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        
        {
          count > 0 && <button onClick={() => setCount(count - 1)}>Decrement</button>
        } */}


        <VideoList></VideoList>
        {/* <GetData></GetData> */}
        
      </div>

  );
};

export default App;
