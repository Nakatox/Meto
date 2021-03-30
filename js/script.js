import * as API from './webservices'

window.addEventListener('DOMContentLoaded', function(){     

    
    let button = document.querySelector('.submit')
    let weatherInfos = []
    let reload = document.querySelector('.submitReload')

    function getCity(){
        return new Promise((resolve)=>{
            API.getCityName().then((data)=>{
                API.getWeather(data).then((field)=>{
                    resolve(field)
                })
            })
        })
         
    }   

    button.addEventListener('click', function(){
        button.style.display ="none"
        getCity().then((data)=>{
            showWeather(data)
        })
    })

    reload.addEventListener('click', function(){
        getCity().then((data)=>{
            showWeather(data)
        })
    })

    function showWeather(data){
        let longitude = data.coord.lon
        let latitude = data.coord.lat
        let name = data.name
        let temp = data.main.temp
        let temp_max = data.main.temp_max
        let temp_min = data.main.temp_min
    }

})