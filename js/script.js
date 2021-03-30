import * as API from './webservices'



function initMap(latitude,longitude,name,temp,temp_max,temp_min){

    let variablePosition = {lat: latitude  , lng: longitude }

    let mapOptions = {
      zoom: 8,
      center: variablePosition,
    };

    let map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    //   Marker

      let marker = new google.maps.Marker({
        position:{lat: latitude, lng: longitude},
        map:map,
        icon: "assets/img/localisation.png"
      })

    //   Info

      let detailWindow = new google.maps.InfoWindow({
        content: `<h2 class="ville">${name}</h2>
                  <p class="temp">Température : <span>${temp} °C</span></p>
                  <p class="temp_m">Max : ${temp_max} °C</p>
                  <p class="temp_m">Min : ${temp_min} °C</p>`
      })

      setTimeout(function() {
        detailWindow.open(map, marker);
      }, 100);
}


window.addEventListener('DOMContentLoaded', function(){     

    
    let start = document.querySelector('.start')
    let button = document.querySelector('.submit')
    let weatherInfos = []
    let reload = document.querySelector('.submitReload')
    let longitude = ""
    let latitude = ""
    let name = ""
    let temp = ""
    let temp_max = ""
    let temp_min = "" 
    let content = document.querySelector('.meteo')
    let y = 0

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
        start.style.display ="none"
        content.style.display ="block"
        reload.value = RandomWord(y)
        y++
        getCity().then((data)=>{
            showWeather(data)
            initMap(latitude,longitude,name,temp,temp_max,temp_min)
            
        })
    })

    reload.addEventListener('click', function(){
        getCity().then((data)=>{
            showWeather(data)
            initMap(latitude,longitude,name,temp,temp_max,temp_min)
            reload.value = RandomWord(y)
            y++
        })
    })


    function RandomWord(y){
      if (y >=7){
        y = 0
      }
      let tabWords = [
        "C'est pas chez toi ?",
        "Toujours pas ?",
        "Là non-plus ?",
        "La prochaine c'est bon.",
        "Nan après celle là c'est bon",
        "Bon ok tu clique encore une fois et c'est bon",
        "HAHAHAH bon allez.. tiens"
      ]
      return tabWords[y]
    }
    function showWeather(data){
        longitude = data.coord.lon
        latitude = data.coord.lat
        name = data.name
        temp = data.main.temp
        temp_max = data.main.temp_max
        temp_min = data.main.temp_min
    }

})
window.initMap = initMap;