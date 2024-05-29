import { useState } from 'react'
// import { useEffect } from 'react'
// import search from '../assets/icons/search.svg'
import cityIcon from '../assets/icons/location-pin.png'
import { useStateContext } from '../Context'
import { BackgroundLayout, WeatherCard, MiniCard } from '../Components'

function Home() {

  // const [input, setInput] = useState('')
  // const { weather, thisLocation, values, place, setPlace } = useStateContext()
  // // console.log(weather)

  // const submitCity = () => {
  //   setPlace(input)
  //   // setInput('')
  //   console.log(`NANDINI Fetching weather data for ${place}`);
    
  // }

  const { weather, thisLocation, values, place, setPlace,aqiVals } = useStateContext();

  return (
    <div className='w-full h-screen text-white px-8'>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-10 px-[9.5%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
          aqiVal={aqiVals[0]}
        />

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1, 7).map((curr,index) => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                  aqiVal={aqiVals[index+1]}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default Home
