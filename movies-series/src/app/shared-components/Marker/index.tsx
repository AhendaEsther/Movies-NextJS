import React from "react";

interface MarkerProps {text:string}
function Marker({text}:MarkerProps){
  return(
  <div className="flex  gap-4 items-center ">
    <div className="bg-red-500 px-3 py-4 rounded-[4] ml-0.5" ></div>
    <p className=" font-semibold text-red-500 mb-2">{text}</p>
  </div>
)}
export default Marker;