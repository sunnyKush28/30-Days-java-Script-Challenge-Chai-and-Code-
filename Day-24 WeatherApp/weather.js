

async function fetchData() {
    const locationInput = document.getElementById('locationInput').value

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=aa718e1ffb0da28b0b9e99caa9135e72&units=metric`)
        if (!res.ok) {
            throw new Error("City not Found")
        }

        const data = await res.json()
        const locationInputId = data.id
        // console.log(data);

        const location = document.getElementById('location')
        const temperature = document.getElementById('temperature')
        const description = document.getElementById('description')
        location.innerHTML = data.name
        temperature.innerHTML = `${data.main.temp} °C`
        description.innerHTML = data.weather[0].description
        weatherForcatFiveDays(locationInputId)

    } catch (error) {
        console.log(error);
        alert(error.message)

    }
}

async function getWeather() {

    try {
        const data = await fetchData(locationInput);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const weatherForcatFiveDays = async (locationInputId) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${locationInputId}&appid=aa718e1ffb0da28b0b9e99caa9135e72&units=metric`)
    const forecastdata = await res.json()


    const weaterforcast = document.getElementById('weaterforcast')
    weaterforcast.innerHTML = ''; // Clear previous content if any
    forecastdata.list.map((dataNode) => {


        const ul = document.createElement('ul')
        const dateLi = document.createElement('li');
        const timeLi = document.createElement('li');
        const iconLi = document.createElement('li')
        const date = new Date(dataNode.dt_txt)
        const formateDate = date.toLocaleDateString('en-IN', {
            weekday: 'long',  // Full name of the day (e.g., "सोमवार")
            year: 'numeric',   // Full year (e.g., "2024")
            month: 'long',     // Full name of the month (e.g., "अगस्त")
            day: 'numeric'    // Day of the month (e.g., "5")
        })

        const formatTime = date.toLocaleTimeString('en-IN', {
            hour: '2-digit',   // Hour in 12-hour format (e.g., "02 PM")
            minute: '2-digit', // Minute (e.g., "00")
            hour12: true       // Display time in 12-hour format with AM/PM
        })



        dateLi.innerHTML = `<h3>${formateDate}</h3>`;
        timeLi.innerHTML = `<h4>${formatTime}</h4>`;


        iconLi.innerHTML = `<img src='http://openweathermap.org/img/wn/${dataNode.weather[0].icon}@2x.png''>`
        ul.appendChild(dateLi);
        ul.appendChild(timeLi);

        ul.appendChild(iconLi);

        const keysToShow = ['temp', 'feels_like', 'humidity', 'pressure'];
        keysToShow.forEach((key) => {
            const li = document.createElement('li');
            const unit = (key === 'temp' || key === 'feels_like') ? '°C' : '';

            li.textContent = `${key}: ${dataNode.main[key]} ${unit}`;
            ul.appendChild(li);
        });

        weaterforcast.appendChild(ul)
    })



}

