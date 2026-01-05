import { useEffect, useState } from "react";
import dataContext from "./dataContext";

export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [word, setWord] = useState("");
  const [close,setClose]=useState(false);
  const [error, setError] = useState("");

   const [words,setWords]=useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  })
    useEffect(()=>{
            localStorage.setItem("items",JSON.stringify(words))
        },[words])
  useEffect(() => {
    if (!word) return;
     setError("");  
     setData(null);  

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
        if(!res.ok) throw new Error("Word Not found")
        return res.json()})
      .then(res => {
         if (!Array.isArray(res)) {
        throw new Error("Invalid word");
      }
        setData(res[0])

            setWords((prev)=>{
         if (prev.includes(word)) return prev;
         
         return[...prev,word]
        }
    )
      })
      .catch(err =>{
        
        setError(`Error! ${word} not found`);
        console.log(err)
      })
  }, [word]);

  return (
    <dataContext.Provider value={{ data, setData, word, setWord ,close,setClose,words,setWords,error,setError}}>
      {children}
    </dataContext.Provider>
  );
}
