import { useContext, useEffect } from "react"
import dataContext from "../context/dataContext"

export default function Recent(){
        const {words,setWord,setClose,setWords}=useContext(dataContext)
      
    return(
         <div className="bg-white/50 backdrop-blur-lg 
                    border border-black/70 px-2 py-3 rounded-2xl 
                    font-sans flex flex-col items-start 
                    hover:bg-white/60
                    shadow-md shadow-black
                    overflow-auto">
            <div className="flex  flex-wrap gap-2"> 
            {words && words.map((word,index)=>(

                <button 
                 key={index}
                 onClick={()=>{
                    setWord(word)
                    setClose(true)
                 }}
                 className="bg-black/15 hover:border hover:border-black border border-transparent box-border transition-all rounded-lg text-black px-2 py-0.5"
                 >{word}</button>
            ))}
            </div>
            <button 
            className="text-blue-500 mt-10 self-center text-lg border-none hover:underline "
            onClick={()=>{localStorage.clear()
                setWords([])
            }}
            >Clear Recents</button>

        </div>
    )
}