// import {fetch} from "react-native"
export const getApiCallRequest=async(cityName)=>{
      console.log("hey i called")
      const APIKEY = '5d3e1ba6775c5a97031d5f4705beeaad';
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&APPID='+APIKEY+'';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
}