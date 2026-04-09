
//API something:
const weatherUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?days=3&q=London';
const weatherOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '52a2365d0fmsh64f226660940b82p14ba87jsnfa38e45e7e58',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

let scrollingBox;
let offsetLeftStart;
let isMoving;

//fetches data from API
async function getData(url, options) {
    try {

        //it waits for the API response
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();

            //converts to JSON and returns it
            return result;
        } else {
            throw (response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

function updateWeather(weatherObject) {
    console.log(weatherObject);
    document.querySelector("#currentTemp span").innerHTML = weatherObject.current.temp_f;
    document.querySelector("#currentStatus").innerHTML = weatherObject.current.condition.text;
    document.querySelector("#currentHumidity span").innerHTML = weatherObject.current.humidity + "%";
    document.querySelector("#currentWind").innerHTML = weatherObject.current.wind_mph + "mph " + weatherObject.current.wind_dir;

    let windspeed = weatherObject.current.wind_mph;
    let winddirection = weatherObject.current.wind_dir;
    document.querySelector("#currentWind").innerHTML = windspeed + "mph" + winddirection;

    let futureDays = document.querySelectorAll(".futureDay");
    for (i = 0; i < futureDays.length; i++) {

        futureDays[i].querySelector(".futureTemp").innerHTML = weatherObject.forecast.forecastday[i].day.condition.text;

        windspeed = weatherObject.forecastday[i].day.maxwind_mph;
        winddirection = weatherObject.current.wind_dir;

    }

}

//wait for the page to load before running this code.
document.addEventListener("DOMContentLoaded", function () {
    scrollingBox = document.querySelector("#futureInfo");
    isMoving = false;


    //enables click and drag horizontal scroll.
    scrollingBox.addEventListener("mousedown", function (e) {
        scrollLeftStart = scrollingBox.scrollLeft;
        offsetLeftStart = e.pageX - scrollingBox.offsetLeft;
        isMoving = true;
    });

    scrollingBox.addEventListener("mouseleave", function (e) {
        isMoving = false;
    })
    scrollingBox.addEventListener("mousemove", function (e) {
        e.preventDefault();
        if (!isMoving) return;
        scrollingBox.scrollLeft = scrollLeftStart - (e.pageX - scrollingBox.offsetLeft - offsetLeftStart);
    });

    //ipLookup data
    let ipLookupURL = "https://api.ipify.org/?format=json";
    let ipLookupOptions = {};

    //Fetch user's IP address
    // use ajax to fetch IP in JSON format?
    getData(ipLookupURL, ipLookupOptions).then(function (result) {


        //use IP address to fetch weather data
        let weatherLookupURL = weatherUrl + result.ip;
        console.log(weatherLookupURL);

        //based on location
        getData(weatherLookupURL, weatherOptions).then(function (weatherResult) {
            console.log(weatherResult);

            //display it on the page
            updateWeather(weatherResult);
        });
    });

    document.querySelector("#findLocation").addEventListener("click", function () {
        document.body.classList.toggle("showModal");
    });


    document.querySelector("#LocationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        document.body.classList.toggle("showModal");
        let newLocation = document.querySelector("#locationBox").value;

        let weatherLookupURL = weatherUrl + result.ip;
        console.log(weatherLookupURL);

        getData(weatherLookupURL, weatherOptions).then(function (weatherResult) {
            console.log(weatherResult);
            updateWeather(weatherResult);
        });

    });

});