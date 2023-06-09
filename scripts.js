let weather = {   //create variable that will be searched and displayed 
    "apikey": "115faffaadbe2492cdafbae1cadecf88", //personal API key
    getWeather: function(city) {  //create function that will fetch the weather from the URL
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey
            )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));
    },

    displayweather: function(data) {   //function that will display the weather
        const {name} = data;
        const {icon, description} = data.weather[0]; //search for the first element [0] in the array of data that is provided by OpenWeather.org 
        const {temp, humidity} = data.main;  //extract data from the main
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed)   //display results on the console for checking of errors 
        document.querySelector(".location").innerText = "Weather in: " + name;  //change the text of the HTMl text with the information that was searched
        document.querySelector(".state").innerText = description;
        document.querySelector(".temp").innerText ="Temperature: " + temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speedofwind").innerText = "Wind speed: " + speed + "Km/h";    
    },    
    
    search: function () {  //get the value that was inserted into the searchfield 
        this.getWeather(document.querySelector(".searchfield").value);
    }
}

document.querySelector(".find button").addEventListener("click", function() { //execute the search function once the value from the searchfield was passed to it after clicking the button 
    weather.search();
});

document.querySelector(".searchfield").addEventListener("keyup", function(event) { //adding the ability to hit "Enter" on the keyboard to search instead of clicking the serach button 
    if (event.key == "Enter") {
        weather.search();
    }
});