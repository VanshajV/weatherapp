
import './App.css';
import InfoCard from './components/InfoCard';
import { useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const date = moment().format("DD MMMM YYYY");
  const time = moment().format("HH:mm");
  const day = moment().format('dddd');

  const [data, setData] = useState(null)
  const [city, setcity] = useState("Delhi")
  const [feel, setfeel] = useState(null)
  const [place, setplace] = useState("Delhi")
  const [speed, setspeed] = useState(null)

  const getdetails = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bbf64e69b6702ae5a44feaaff2e5d9d&units=metric`;
    let data = await fetch(url);
    let parse = await data.json()
    console.log(parse);
    if (parse.cod === "404" || city === "") {
      setData(null);

    }
    else {
      setData(parse.main.temp);
      setfeel(parse.main.feels_like)
      function cap(city){
        const x=city.charAt(0).toUpperCase() + city.slice(1);
        return x ;
        }
      setplace(cap(city))
      

      setspeed(parse.wind.speed)

    }

  }

 


  const handlesearch = () => {
    getdetails()


  }
  const changecity = (e) => {
    setcity(e.target.value)


  }

  useEffect(() => {

    getdetails()

  }, [])

  return (
    <div className="App">


      <div className='bg-gradient-to-r from-[#545e68] to-[#293241]'>
        <div className='h-[100vh] '>
          <h1 className='p-10 text-white text-3xl'>WeatherVista</h1>
          <div className='mx-auto w-[25rem] mt-20 md:w-[40rem]  text-white md:h-96 rounded-3xl p-4 flex flex-col md:flex-row bg-[#0b121e] justify-between '>

            <div className='flex items-center justify-center space-y-4 p-2 flex-col rounded-2xl md:w-[15rem] bg-[#202b3c] pt-5'>
              <input className='px-2 p-2 rounded-md text-black text-center' type="text" placeholder='Enter a city' onChange={changecity} />
              <button onClick={handlesearch} className=' items-center space-x-1 rounded-md flex bg-[#0b121e] w-25 p-2'><p>Search </p><img src="icons8-search-24.png" className="w-5" alt="" /></button>
            </div>
            <div className='p-4 rounded-2xl bg-gray-100 md:w-[22rem] pb-5 md:pb-0 mt-6 md:mt-0'>
              <div className='text-lg text-black flex justify-between'><span>{time}</span><div><span className='mr-2'>{day},</span><span>{date}</span></div></div>

              {!data ? (<div className='h-32 py-10 md:py-28'><h1 className=' text-black text-4xl '>No Data found</h1><p className='text-black'>Please enter city name</p></div>)
                : <>
                  <div className='flex text-black items-center justify-between'>
                    <img className="w-32" src="image_processing20220801-17461-1qbptiv.png" alt="" />
                    <h1 className='text-5xl mr-2'>{Math.round(data)}&#176;C</h1>
                  </div>

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
