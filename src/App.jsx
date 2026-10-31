import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [City , setCity] = useState("Lahore")
  const [Data, setData] = useState(null)
  const [loading, setloading] = useState(false)
  const [Error, setError] = useState("");

const API=`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=02643a3a80ac39918bd29f3b360a0592&units=metri`
const FetchWeather = async ()=>{
  setloading(true)
  setError("")
   try {
      const response = await axios.get(API);
    
   } catch (error) {

     if (error.response?.status === 404) {
      setError("Please enter a correct city name.");
    } else {
      setError("Something went wrong. Please try again.");
    }

   }finally{
    setloading(false)
   }


}
useEffect(()=>{
   FetchWeather();
   setCity('');
  },[])
 const SubmitHandle = (e)=>{
    e.preventDefault();
  console.log(City)
  console.log(Data)
  // FetchWeather();
  setCity('');

  }
  

  if (!Data) {
     return  (   
     <div className="flex flex-col items-center justify-center py-16">

      {/* Spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-500"></div>

      <p className="mt-5 text-sm font-medium text-gray-500 animate-pulse">
        Fetching weather...
      </p>

    </div>
  );

     }
 


  return (
  <div className="min-h-screen bg-gray-400 flex items-center justify-center ">

    {/* Main Card */}
    <div className="w-full max-w-4xl min-h-[75vh] bg-white rounded-2xl border border-gray-200 p-2 pt-10 flex flex-col shadow-sm">

      {/* Search Bar */}
      <div className="input_feild mb-8">
        <form
          onSubmit={(e) => {
            SubmitHandle(e)
          }}
          className="flex w-full"
        >
          <input
            value={City}
            onChange={(e) => {
              setCity(e.target.value)
            }}
            className="w-[70%] rounded-l-xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-800 outline-none transition focus:border-gray-500 focus:bg-white"
            placeholder="Enter city (eg. Lahore)"
            type="text"
          />

          <button
            onClick={FetchWeather}
            type="submit"
            className="w-[30%] cursor-pointer rounded-r-xl bg-gray-900 px-4 py-4 text-white transition hover:bg-gray-700 active:scale-[0.98]"
          >
            Search
          </button>
        </form>
      </div>

{/* ///////error  message will be displayed if error has some value */}
{Error && (
  <p className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
    {Error}
  </p>
)}
   
  {loading? (
<div className="flex flex-col items-center justify-center py-16">

      {/* Spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-500"></div>

      <p className="mt-5 text-sm font-medium text-gray-500 animate-pulse">
        Fetching weather...
      </p>

    </div>

    
) : Error ? (
  <p className="text-center text-red-500">{Error}</p>
) : Data ? (
  <Card Data={Data} />
) : null}

  

    </div>
  </div>
);
}

export default App
