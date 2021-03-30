import * as API from './webservices'

function initMap(){

    let variablePosition = {lat: 48.8534  , lng: 2.3488 }

    let mapOptions = {
      zoom: 8,
      center: variablePosition,
    };

    let map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    //   Marker

      let marker = new google.maps.Marker({
        position:{lat: 48.8534, lng: 2.3488},
        map:map,
        icon: "assets/img/localisation.png"
      })

    //   Info

      let detailWindow = new google.maps.InfoWindow({
        content: `<h2>Paris</h2>`
      })

      setTimeout(function() {
        detailWindow.open(map, marker);
      }, 100);
}


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
window.initMap = initMap;