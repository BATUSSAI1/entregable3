import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hoock/useFetch'
import LocationCard from './componets/LocationCard'
import getRandomNumber from './util/RandomNumber'
import ResidentCard from './componets/ResidentCard'


function App() {

  const localID = getRandomNumber (126)
  const [inputValue, setinputValue] = useState(localID)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError]  = useFetch(url)
 

  useEffect (() => {    
    getLocation ()
  }, [inputValue])

  const inputLocation = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    setinputValue(inputLocation.current.value)

}


  return (
    <div>
     <div className='img__head'>
      <img src="/ima/1.png" alt="" />
      </div>
     <div className='button'>
     <form onSubmit={handleSubmit}>
      <input ref ={inputLocation} type="text" />
      <button > Search </button>
    </form>

     </div>
    

    {
      hasError
      ?<h2>Hey! you must provide an id form 1 to 126 </h2>
      : (
        <>
                <LocationCard 
        location = { location } 
        />
        <div className='resident__container'>
         {
           location?.residents.map(url =>(
             <ResidentCard
             key = {url}
             url = {url}
             />
           ) )
         }
          
        </div>
        </>
      )
    }
    </div>
  )
}


export default App
