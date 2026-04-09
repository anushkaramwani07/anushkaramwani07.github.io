let scrollingBox;
let offsetLeftStart;
let isMoving;

async function getData(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw (response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

function updateWeather(weatherObject){
    console.log(weatherObject);
    document.querySelector("#currentTemp span").innerHTML = weatherObject.current.temp_f;
    document.querySelector("#currentStatus").innerHTML = weatherObject.current.condition.text;
    document.querySelector("#currentHumidity span").innerHTML = weatherObject.current.humidity + "%";
    document.querySelector("#currentWind").innerHTML = weatherObject.current.wind_mph + "mph " + weatherObject.current.wind_dir;

    let windspeed = weatherObject.current.wind_mph;
    let winddirection = weatherObject.current.wind_dir;
    document.querySelector("#currentWind").innerHTML = windspeed + "mph" + winddirection;

    let futureDays = document.querySelectorAll(".futureDay");
    for(i=0; i < futureDays.length; i++){
        
        futureDays[i].querySelector(".futureTemp").innerHTML = weatherObject.forecast.forecastday[i].day.condition.text;

         windspeed = weatherObject.forecastday[i].day.maxwind_mph;
         winddirection = weatherObject.current.wind_dir;
    
    }

}

//wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    scrollingBox = document.querySelector("#futureInfo");
    isMoving = false;

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


    let sampleURL = "https://tordevries.github.io/477/examples/ajax-api-test/current.js";
    let sampleOptions = {};

    getData(sampleURL, sampleOptions).then(function (result) {

        updateWeather(result);
        
    });

});