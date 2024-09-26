import { useEffect } from "react";
import { useState } from "react";

const Body = ({ image1, image2, image3, image4,image5,image6,image7,image8 }) => {

  const[city,setCity]=useState("karachi");
  const[search,setSearch]=useState(null);
  const[type,setType]=useState("Rain");
  const [backgroundImage, setBackgroundImage] = useState(image2); 
  const [fadeOut, setFadeOut] = useState(false);
  const [start, setStart] = useState(false);

 

useEffect( ()=>{
const fetchApi=async()=>{
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=07ec1c9540a4cccb69a3040c89a3bf7b`
     const reponse =await  fetch(url);
     const resJson= await reponse.json();
     setCity(resJson.main);
     setType(resJson.weather[0]);
     console.log(resJson.weather);
     console.log(resJson.main);
    

}


  fetchApi();
},[search])

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed!");
    searchCity(event.target.value, event);
    setStart(true);
  }
};

const handleSearch = (event) => {
  console.log("Search icon clicked!");
  const inputValue = document.querySelector(".inputData").value; 
  searchCity(inputValue, event); 
  setStart(true);
};

const searchCity = (cityName) => {
  
  console.log(`Searching for: ${cityName}`);
  setSearch(cityName); 
};




useEffect(() => {

  setFadeOut(true);

  // Determine the new background image based on the weather type
  let newBackgroundImage;
  if (type.main === "Clear") {
      newBackgroundImage = image1; // Image for Clear
  } else if (type.main === "Clouds") {
      newBackgroundImage = image2; // Image for Clouds
  } else if (type.main === "Rain") {
      newBackgroundImage = image3; // Image for Rain
  } else if (type.main === "Snow") {
      newBackgroundImage = image4; // Image for Snow
  } 
  else if (type.main === "Haze") {
    newBackgroundImage = image5; // Image for Snow
}
  else if (type.main === "Mist") {
    newBackgroundImage = image5; // Image for Snow
}
  else if (type.main === "Smoke") {
    newBackgroundImage = image8; // Image for Snow
}
else {
      newBackgroundImage = image2; // Fallback image
  }

  // Update the background image after fade-out duration
  const timer = setTimeout(() => {
      setBackgroundImage(newBackgroundImage);
      setFadeOut(false); // Reset fade-out state after image change
  }, 400); // Match this duration with your CSS transition duration

  return () => clearTimeout(timer); // Cleanup timer
}, [type, image1, image2, image3, image4]); // Dependencies


return (
  <>




<img
                className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
                src={backgroundImage}
                alt="Weather Background"
            />



    <div className="all">
      <div className="navbar">
        <h1>Weather App</h1>
        <div className="searchBar">
          <input
            type="text" // Change type to "text" for a proper input
            className="inputData"
            placeholder="Enter country"
            onKeyDown={handleKeyDown}
          />
          <svg
            className="search_logo"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSearch}
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
 

      {/* Details Section */}
    


    {!city? <div>
      

{!start ? " ":


(
   <div className="invalid_data">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#000000"} fill={"none"}>
    <path d="M17.5 17.6461C16.2676 18.9628 14.8763 20.1884 13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C4.02067 6.59797 4.46666 5.63512 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 3.48631C8.46914 2.53477 10.213 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C21.6603 10.5221 20.8796 13.1643 19.2612 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 9C8.66525 9.53668 8.5 10.3209 8.5 11C8.5 12.933 10.067 14.5 12 14.5C12.6598 14.5 13.4732 14.3174 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11.5 7.53544C11.6633 7.51209 11.8302 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11C15.5 11.1698 15.4879 11.3367 15.4646 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<div><b className="uppercase">{search}</b> not found
</div>
</div>
)
}     
</div>
    
    :(
      <div>
 <div className="city">
 <span className="logo">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width={34}
     height={34}
     color={"#000000"}
     fill={"none"}
   >
     <path
       d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
       stroke="currentColor"
       strokeWidth="1.5"
     />
     <path
       d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
       stroke="currentColor"
       strokeWidth="1.5"
     />
     <path
       d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20"
       stroke="currentColor"
       strokeWidth="1.5"
       strokeLinecap="round"
     />
   </svg>
 </span>
 {search}
 
</div>
<div className="details">
Temperature: {city.temp}°C
<div className="extras">
    <p>Feels Like: {city.feels_like}°C</p>
    <p>Humidity: {city.humidity}%</p>
    <p>Weather condition: {type.main}</p>
  </div>
</div>
</div>
    )

    }
       
      </div>
    </>
  );
};

export default Body;









