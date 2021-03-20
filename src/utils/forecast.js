const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=dd5e609e13c382de970154d055e7898b&query='+ latitude + ',' + longitude + '&units=m'

request({ url, json: true }, (error, {body})=>{
    if(error){
        callback('unuable to connect', undefined)
    }else if(body.error){
        callback('unable to find location', undefined)
    }else{
        callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature+ ' degrees out. It feels like '+ body.current.feelslike+ ' degrees out. The humidity is ' + body.current.humidity + "%")
}
})
}

module.exports = forecast