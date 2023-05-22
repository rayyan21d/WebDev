
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {

    console.log("A request was made to the root route");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', function (req, res) {

    console.log("A request was made to the bmiCalculator route");
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi =  weight / (height * height);
    
    console.log("The bmi was calculated.");
    res.send("Your BMI is " + bmi);

});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});


