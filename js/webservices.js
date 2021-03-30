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

export function getWeather(){
    return new Promise((resolve)=>{
        fetc
    })
}
