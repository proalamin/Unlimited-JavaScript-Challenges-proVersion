console.log('js connected');

const apiKey="b0fc41b2b17df2c39088a880df0d009a";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

async function checkWeather(city){
    const response =await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data= await response.json();
    
    console.log(data)
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp);
    document.querySelector('.humidity').innerHTML= data.main.humidity;
    document.querySelector('.wind').innerHTML= data.wind.speed;
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

