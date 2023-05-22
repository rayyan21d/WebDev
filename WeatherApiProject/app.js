
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

// Create an express application
const application = express();
// Use body parser
application.use(bodyParser.urlencoded({ extended: true }));

application.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
    console.log("File sent");

});

application.post("/", function (req, res) {

    const cityName = req.body.cityName;
    const apiKey = "7a89d8ff30cfb8cd587cfabb77d328f9&units=metric"; 
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;



    https.get(url, function (response) {

        console.log(response.statusCode);

        response.on("data", function (data) {
  
            var weatherData = JSON.parse(data);
            console.log(weatherData);

            var temp = weatherData.main.temp;
            console.log(temp);

            var description = weatherData.weather[0].description;

            //Send it back to the user
            res.write("<h1>The temperature in " + cityName + " is " + temp + " degrees Celcius.</h1>");
            res.write("<h2>The weather is currently " + description + " </h2>");


            //Displaying Image
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
            res.write("<img src=" + iconUrl + ">");

        });
     
    });    





});


application.listen(3000, function () {
    console.log("Server is running on port 3000");
});




