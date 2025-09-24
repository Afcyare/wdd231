const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector('figcaption');
const lat = 2.052998412165495;
const lon =  45.35264741019781;
const api = "665720a6033f794513b241fcef18f0db";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (Error) {
        console.log(Error);
    }
}

apiFetch();


function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    let desc = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc. textContent = `${desc}`;
}
