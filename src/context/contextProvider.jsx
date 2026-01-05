import { useEffect, useState } from "react";
import dataContext from "./dataContext";

export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [word, setWord] = useState("");
  const [close,setClose]=useState(false);
   const [words,setWords]=useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  })
    useEffect(()=>{
            localStorage.setItem("items",JSON.stringify(words))
        },[words])
  useEffect(() => {
    if (!word) return;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => res.json())
      .then(res => setData(res[0]))
      .catch(err => console.error(err))
  }, [word]);

  return (
    <dataContext.Provider value={{ data, setData, word, setWord ,close,setClose,words,setWords}}>
      {children}
    </dataContext.Provider>
  );
}
