import React,{useState} from "react";

const GetData = () => {
    const [data,setData]=React.useState()
    const [data2,setData2]=React.useState()

   
    function handelSubmit(e){
        e.preventDefault()
        setData2(data)
    }
  return (
    <form>
      {/* <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} /> */}
      <input type="text" name="name" placeholder="Enter Name" onChange={(e)=>setData(e.target.value)} />
      <button type="button" onClick={handelSubmit}>Submit</button>
      <p>{data2}</p>
    </form>
  );
};

export default GetData;
