let request = require('request');

let apiKey = 'e9e4deb4f0c2c764e464d371cddd38a3';
let location = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey} `

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});