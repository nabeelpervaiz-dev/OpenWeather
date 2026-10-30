import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [City , setCity] = useState("Lahore")
  const [Data, setData] = useState(null)

const API=`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=02643a3a80ac39918bd29f3b360a0592&units=metri`
const FetchWeather = async ()=>{
   try {
      const response = await axios.get(API);
      if(response.data==null){
    alert("Please Enter a right city Name ...")
      }else{
       setData(response.data)
      }

   } catch (error) {
    console.log(error)
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
     return <div className='h-screen w-full '>Loading data...</div> 
     }
 


  return (
  <div className="min-h-screen bg-[#f4f3ef] flex items-center justify-center p-4 sm:p-8">

    {/* Main Card */}
    <div className="w-full max-w-4xl min-h-[75vh] bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 flex flex-col shadow-sm">

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

      <Card Data={Data} />

    </div>
  </div>
);
}

export default App
