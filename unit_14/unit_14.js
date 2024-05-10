const city = [
   {
      id: 706369,
      name: "Khmelnytskyi",
   },
   {
      id: 3085128,
      name: "Sosnowiec",
   },
   {
      id: 703448,
      name: "Kyiv",
   },
   {
      id: 3096472,
      name: "Katowice",
   },
   { 
		id: 3169984, 
		name: "Pozzuoli" },
   { 
		id: 292968, 
		name:"Abu Dhabi" },
];

function setCity() {
	const selectCity = document.getElementById("city");
   for (let i = 0; i < city.length; i++) {
      let option = document.createElement("option");
      option.value = city[i].id;
      option.innerHTML = city[i].name;
      selectCity.appendChild(option);
   }
   console.log(selectCity);
}
setCity();

const param = {
   url: "https://api.openweathermap.org/data/2.5/",
   appid: "782005c3a67026ee7e595345048969f1",
};

function getWeather() {
	const cityId = document.querySelector('#city').value;
   fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
      .then((weather) => {
         return weather.json();
      })
      .then(showWeather);
}

function showWeather(data) {
   console.log(data);
   document.querySelector(".weather__title").textContent = data.name;
   document.querySelector(".item__temp").innerHTML = Math.round(data.main.temp) + "&deg";
   document.querySelector(".item__description").innerHTML = data.weather[0]["description"];
	document.querySelector('.item__icon').innerHTML = `<img src=" https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
   document.querySelector(".data__max-temp").innerHTML = `Temp.max: <p>${data.main.temp_max + "&deg"}</p>`;
   document.querySelector(".data__min-temp").innerHTML = `Temp.min: <p>${data.main.temp_min + "&deg"}</p>`;
   document.querySelector(".data__humid").innerHTML = `Humidity: <p>${data.main.humidity + "&#37"}</p>`;
   document.querySelector(".data__pressure").innerHTML = `Pressure: <p>${data.main.pressure} hPa</p>`;
   document.querySelector(".wind__speed").innerHTML = `<p>${data.wind.speed} m/s </p>`;
   document.querySelector(".wind__deg").innerHTML = `<p>${data.wind.deg}&deg </p>`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;



