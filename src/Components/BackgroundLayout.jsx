import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
import Delhi from '../assets/images/delhi.jfif'
import Shimla from '../assets/images/shimla.jfif'
import Hyderabad from '../assets/images/hyderabad.jfif'

const BackgroundLayout = () => {

  const { weather, thisLocation, place } = useStateContext()
  const [image, setImage] = useState(Clear)

  // useEffect(() => {
  //   if (weather.conditions) {
  //     let imageString = weather.conditions
  //     if (imageString.toLowerCase().includes('clear')) {
  //       setImage(Clear)
  //     } else if (imageString.toLowerCase().includes('cloud')) {
  //       setImage(Cloudy)
  //     } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
  //       setImage(Rainy)
  //     } else if (imageString.toLowerCase().includes('snow')) {
  //       setImage(Snow)
  //     } else if (imageString.toLowerCase().includes('fog')) {
  //       setImage(Fog)
  //     } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
  //       setImage(Stormy)
  //     }
  //   }
  // }, [weather])

  useEffect(() => {
    if (place) {
      let imageString = place
      if (place.toLowerCase().includes('shimla')) {
        setImage(Shimla)
      } else if (imageString.toLowerCase().includes('new delhi')) {
        setImage(Delhi)
      } else if (imageString.toLowerCase().includes('hyderabad')) {
        setImage(Hyderabad)
      }
    }
  }, [place])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout