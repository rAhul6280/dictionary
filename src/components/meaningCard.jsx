import { useContext, useState } from "react";
import dataContext from "../context/dataContext";

export default function Card() {
  const { word, data,setClose,error } = useContext(dataContext);
  

  if (!word) return null;
  
  if (error) return <p className="text-center text-2xl">{error}</p>;
  
  
if (!data) {
  return <p className="text-center">Loading...</p>;
}
  
  return (
    <div className="bg-white/50 backdrop-blur-lg 
                    border border-black/70 px-2 py-3 rounded-2xl 
                    font-sans flex flex-col items-start 
                    hover:bg-white/60 shadow-md shadow-black overflow-auto">
      
        
        <h2 className="poppins-bold text-5xl lowercase">
          {word}
        </h2>
        <button 
        onClick={()=>setClose(false)}
        className="text-black rounded-lg border-black fixed top-2.5 right-2.5">X</button>
        <p className="text-blue-800 -mt-1.5 text-lg poppins-extralight-italic">
          {data.phonetic || " "}
        </p>
        {data.meanings.map((obj,index)=>( 
           <div key={index}>
          <h3
          className=" font-bold text-xl"
          >{obj.partOfSpeech|| " "}</h3>
         <p> {obj.definitions?.[0]?.definition|| " "}</p>
          {index < data.meanings.length - 1 && (
      <hr />
    )}
         </div>
        ))}
      </div>
    
  );
}
