import * as API from './webservices'



let city = API.getCityName().then((data)=>{
    console.log(API.getWeather(data))
})