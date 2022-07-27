const request = require("request")
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address+".json?access_token=pk.eyJ1IjoiYWphaXktcmFtIiwiYSI6ImNrajJ5eGtzeDVidDYzMXFqbzB3eHN0eWYifQ.H_F9fUyAD5jMB4tRlzg7ng"
    //use encodeURIComponent(address) for safe purpose ( ? becomes %3F) (i.e.) when  you use speacial character
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if ( response.body.features.length === 0) {
            callback('Unable to find location. Try another. ', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports=geocode