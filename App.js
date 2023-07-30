
import './App.css'; 
import InfoCard from './components/InfoCard';
import { useEffect, useState } from 'react';

function App() {

  const[data,setData]=useState(null)
  const[city,setcity]=useState("Ludhiana")
  const[feel,setfeel]=useState(null)
  const[place,setplace]=useState("Delhi")
  const[speed,setspeed]=useState(null)

 const getdetails=async()=>{
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bbf64e69b6702ae5a44feaaff2e5d9d&units=metric`;
  let data= await fetch(url);
  let parse= await data.json()
  console.log(parse);
  if(parse.cod==="404" || city===""){
    setData(null);
  }
  else{
    setData(parse.main.temp);
    setfeel(parse.main.feels_like)
    setplace(city)
    setspeed(parse.wind.speed)
    
  }

}




const handlesearch=()=>{
  getdetails()
  

}
const changecity=(e)=>{
  setcity(e.target.value)


}

useEffect(()=>{
  getdetails()
  
},[])

  return (
    <div className="App">
        
      
    <div className='bg-gradient-to-r from-[#545e68] to-[#293241]'>
      <div className='h-[100vh] '>
        <h1 className='p-10 text-white text-3xl'>WeatherVista</h1>
      <div className='mx-auto w-[25rem] mt-20 md:w-[40rem]  text-white md:h-96 rounded-3xl p-4 flex flex-col md:flex-row bg-[#0b121e] justify-between '>
        
        <div className='flex items-center justify-center space-y-4 p-2 flex-col rounded-2xl md:w-[15rem] bg-[#202b3c] pt-5'>
          <input className='px-2 p-2 rounded-md text-black text-center' type="text"  placeholder='Enter a city' onChange={changecity}/>
          <button onClick={handlesearch} className=' rounded-md bg-[#0b121e] w-20 p-2'>Search</button>
        </div>
        <div className='rounded-2xl bg-gray-100 md:w-[20rem] pb-10 md:pb-0 mt-12 md:mt-0'> 
        <img className="w-32 mx-auto " src="image_processing20220801-17461-1qbptiv.png" alt="" />
          {!data ? ( <div><h1 className=' text-black text-4xl '>No Data found</h1><p className='text-black'>Please enter city name</p></div>)
         :<>
          
          <InfoCard title={place} CurrentTemp={data} feelslike={feel} speed={speed}></InfoCard>
          </>
          }
        </div>
        
      </div>
      </div>
      </div>
      
    
    </div>
  );
}

export default App;
