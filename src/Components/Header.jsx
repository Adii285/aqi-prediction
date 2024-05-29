import cityIcon from '../assets/icons/location-pin.png'
import homeIcon from '../assets/icons/home.png'
import aboutIcon from '../assets/icons/about.png'
import { useStateContext } from '../Context'
import App from '../App.jsx'
// import { BackgroundLayout, WeatherCard, MiniCard } from '../Components'

function Header() {

//   const { weather, thisLocation, values, place, setPlace } = useStateContext();
  const { place, setPlace } = useStateContext();

  const handleSelectChange = (e) => {
    setPlace(e.target.value);
    console.log(`NANDINI Fetching weather data for ${e.target.value}`);
  };

  const handleHomeClick = () => {
    // Navigate to the home page
    console.log('NANDINI Navigating to home page updated');
    // Add your navigation logic here if necessary
    return(
        <>
            <App />
        </>
    )
  };

  const handleAboutClick = () => {
    // Display some text for the about section
    console.log('NANDINI Displaying about section');
    // Add your display logic here if necessary
    alert("About AQI Predictor: This application predicts Air Quality Index (AQI) for selected cities.");
  };

  return (
    <div className='w-full text-white px-8'>
        <nav className='w-full p-3 flex justify-between items-center'>
            <h1 className='font-bold tracking-wide text-3xl'>AQI Predictor</h1>
            <div className='flex items-center gap-4 ml-auto'>
                <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
                    <img src={cityIcon} alt="cityIcon" className='w-[1.5rem] h-[1.5rem]' />
                    <select 
                        className='focus:outline-none w-full text-[#212121] text-lg'
                        onChange={handleSelectChange}
                        value={place}
                    >
                        <option value="" disabled>Select city</option>
                        <option value="Shimla">Shimla</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </div>
                <button onClick={handleHomeClick} className='flex items-center justify-center w-[2rem] h-[2rem]'>
                    <img src={homeIcon} alt="Home" className='w-full h-full' />
                </button>
                <button onClick={handleAboutClick} className='flex items-center justify-center w-[2rem] h-[2rem]'>
                    <img src={aboutIcon} alt="About" className='w-full h-full' />
                </button>
            </div>  
        </nav>
    </div>
  )
}

export default Header
