export function getCityName(){
    return new Promise((resolve)=>{
        fetch('js/city.list.json').then(function (response) {
            response.json().then(function (data) {    
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min)) + min;
                  } 
                let city  = []
                city += data[getRandomInt(1, 209578)].name 
                resolve(city)
            })
        })
    })
}

export function getWeather(city){
    return new Promise((resolve)=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23ba9494632d825d1101618717bfaaac`)
            .then(function(response){response.json()
                .then(function(data){
                    resolve(data)
            })
        })
    })
}
