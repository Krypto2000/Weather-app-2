
let currCity = "Birmingham"
let units = "metric"
let currCity1 = "Birmingham"
//selectors
var city = document.querySelector(".city2")
var city1 = document.querySelector(".Birmingham")
var temp = document.querySelector(".tempdegree")
var humidity = document.querySelector(".humid_percentage")
var windSpeed = document.querySelector(".humid_percentage_2")
var Pressure = document.querySelector(".humid_percentage_3")
var WeatherForecast = document.querySelector(".PC")
var WeatherForecast1 = document.querySelector(".PC_1")
var WeatherInfo = document.querySelector(".words")
var WeatherInfo1 = document.querySelector(".word")
var Time = document.querySelector(".time")
var TodaysDate= document.querySelector(".Monday")
var icon1 = document.querySelector(".img")
var icon2 = document.querySelector(".img1")


//search cities
document.querySelector(".weather_search").addEventListener
('submit', e => {
    let search = document.querySelector(".weather_searchform")
    //prevent Default
    e.preventDefault()
    //changecurrent City
    currCity1 = search.value
    // get weatherForecast
    getWeather()
})
//search cities
document.querySelector(".fa-magnifying-glass").addEventListener
('keypress', e => {
    let search = document.querySelector(".fa-magnifying-glass")
    //prevent Default
    e.preventDefault()
    //changecurrent City
    currCity1 = search.value
    // get weatherForecast
    getWeather()
})


//date and time
const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames
    (['en'], {type: 'region'})
    return regionNames.of(country)
}
function getWeather(){
    const API_KEY = '50e011a9acc81ee3ed08622ff8255a25'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity,currCity1}&appid=${API_KEY}&units=${units}`).then(res=>res.json()).then(data => 
    {

        city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
        city1.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
        temp.innerHTML = `${data.main.temp.toFixed()}&#176`
        humidity.innerHTML = `${data.main.humidity}%`
        windSpeed.innerHTML = `${data.wind.speed}m/s`
    Pressure.innerHTML = `${data.main.pressure}hPa`
    WeatherForecast.innerHTML = `<p>${data.weather[0].main}`
    WeatherForecast1.innerHTML = `<p>${data.weather[0].main}`
    WeatherInfo.innerHTML= `<p>${data.weather[0].description}. Low ${data.main.temp_min}°C</p>`
    Time.innerHTML =`<p>${currentTime}</p>`
    TodaysDate.innerHTML = `<p>${currentDay}</p>`
    WeatherInfo1.innerHTML= `<p>Winds ${data.wind.deg} at ${data.wind.speed} km/h</p>`

        icon1.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`
        icon2.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`
    

    }) 

}

    document.body.addEventListener('load', getWeather())

    