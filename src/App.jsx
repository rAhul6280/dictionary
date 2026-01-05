import { BookOpenIcon } from '@heroicons/react/24/outline'
import Search from './components/search'
import Card from './components/meaningCard'

import ContextProvider from './context/contextProvider'
import { useContext } from 'react'
import dataContext from './context/dataContext'
import Recent from './components/recents'



function App() {
 const {close,words}=useContext(dataContext)

  return (
    

  <div className="pt-10 w-full lg:w-lg px-2 h-screen flex flex-col">
  <div className="flex flex-row items-center self-center gap-1.5">
 
    <h1 className='text-5xl text-black poppins-regular font-semibold text-shadow-md text-shadow-slate-800 '>Dictionary</h1>
    </div>
    <div className=' border flex flex-col gap-6 border-slate-800 mt-6 shadow-lg shadow-black rounded-xl px-4 py-8 h-10/12 ' >

   
    <Search/>
    {!close && words.length>0 &&<Recent/>}
   {close && <Card/>}
   
     </div>
  </div>
   
   
  )
} 

export default App
