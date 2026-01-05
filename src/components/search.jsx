import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import dataContext from "../context/dataContext";
function Search(){
  const{setWord,setClose,setWords,word}=useContext(dataContext);
  const [input,setInput]=useState('');
 
   const handleSubmit =(e)=>{
    if(e.key==="Enter"){
      let value =input.trim()
      
      if(!value) return;
      setWord(value);
      setWords((prev)=>{
         if (prev.includes(value)) return prev;
         return[...prev,value]
        }
    )
     setInput("")
      setClose(true)
    }
   }

  

    return(
    <div className=" flex items-center pl-1 w-full pr-5 pt-1 pb-1.5
    bg-black/15 backdrop-blur-md border border-black/40 rounded-2xl
    shadow-black/70 shadow-md  focus-within:border-black focus-within:bg-black/15
    hover:bg-black/15
    transition-all">
  <MagnifyingGlassIcon className="h-7 w-7 text-black/50"/>
  <input
    id="search-word"
    type="text"
    name="search-word"
    value={input}
    placeholder="Type word here..."
    className="flex-1 ml-0.5 text-2xl font-mono bg-transparent text-black/70 outline-none placeholder:text-black/50"
    onChange={(e)=>setInput(e.target.value)}
    onKeyDown={handleSubmit}
  />
</div>
    )
}


export default Search